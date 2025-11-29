/**
 * Complete page validation system
 * Validates metadata and schemas for all pages
 */

import { validateMetadata, validateGeneratedMetadata, MetadataRequirements } from './metadata-validator';
import { validateSchemas, SchemaRequirements } from './schema-validator';
import { getAllBrokerSlugs } from '@/lib/brokers';
import { getAllGuides } from '@/lib/guides';
import { getBrokerData } from '@/lib/brokers';
import { getGuideData } from '@/lib/guides';
import { getKeywordsForPage, extractH1FromContent, containsKeyword } from '@/lib/keywords';
import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

export interface PageValidationResult {
  pagePath: string;
  pageType: 'static' | 'dynamic' | 'layout';
  metadataResult?: {
    isValid: boolean;
    errors: string[];
    warnings: string[];
  };
  schemaResults?: Array<{
    isValid: boolean;
    errors: string[];
    warnings: string[];
    schemaType?: string;
  }>;
  h1Result?: {
    found: boolean;
    text?: string;
    warnings: string[];
  };
  hasMetadata: boolean;
  hasSchemas: boolean;
  overallValid: boolean;
}

export interface ValidationReport {
  totalPages: number;
  validPages: number;
  invalidPages: number;
  pages: PageValidationResult[];
  summary: {
    metadataErrors: number;
    metadataWarnings: number;
    schemaErrors: number;
    schemaWarnings: number;
  };
}

/**
 * Validates a static page by reading its file
 */
export async function validateStaticPage(
  filePath: string,
  metadataRequirements?: MetadataRequirements,
  schemaRequirements?: SchemaRequirements
): Promise<PageValidationResult> {
  const relativePath = path.relative(process.cwd(), filePath);
  const pagePath = '/' + relativePath
    .replace(/^app\//, '')
    .replace(/\/page\.tsx$/, '')
    .replace(/\/route\.ts$/, '')
    .replace(/\/layout\.tsx$/, '');

  const result: PageValidationResult = {
    pagePath,
    pageType: 'static',
    hasMetadata: false,
    hasSchemas: false,
    overallValid: true,
  };

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Check for metadata export
    const hasMetadataExport = /export\s+(const|async\s+function)\s+metadata/.test(content);
    const hasGenerateMetadata = /export\s+async\s+function\s+generateMetadata/.test(content);
    
    if (hasMetadataExport || hasGenerateMetadata) {
      result.hasMetadata = true;
      // Note: We can't actually execute the metadata function from file reading
      // This is a structural check
      result.metadataResult = {
        isValid: true,
        errors: [],
        warnings: [],
      };
    } else {
      result.metadataResult = {
        isValid: false,
        errors: ['No metadata export found'],
        warnings: [],
      };
      result.overallValid = false;
    }

    // Check for schema usage
    const hasJsonLd = /JsonLd|generate.*Schema/.test(content);
    if (hasJsonLd) {
      result.hasSchemas = true;
    }

    // Check H1 and keywords
    const h1Text = extractH1FromContent(content);
    const keywords = getKeywordsForPage(pagePath);
    
    if (h1Text) {
      result.h1Result = {
        found: true,
        text: h1Text,
        warnings: [],
      };
      
      // Check if H1 contains primary keywords (if required)
      if (keywords.primary.length > 0 && !containsKeyword(h1Text, keywords.primary)) {
        result.h1Result.warnings.push(
          `H1 should contain at least one primary keyword: ${keywords.primary.join(', ')}`
        );
      }
    } else {
      result.h1Result = {
        found: false,
        warnings: ['H1 heading not found in page content'],
      };
    }

  } catch (error) {
    result.metadataResult = {
      isValid: false,
      errors: [`Error reading file: ${error instanceof Error ? error.message : String(error)}`],
      warnings: [],
    };
    result.overallValid = false;
  }

  return result;
}

/**
 * Validates a dynamic broker page
 */
export async function validateBrokerPage(
  slug: string,
  metadataRequirements?: MetadataRequirements,
  schemaRequirements?: SchemaRequirements
): Promise<PageValidationResult> {
  const pagePath = `/brokers/${slug}`;
  const result: PageValidationResult = {
    pagePath,
    pageType: 'dynamic',
    hasMetadata: false,
    hasSchemas: false,
    overallValid: true,
  };

  try {
    const brokerData = await getBrokerData(slug);
    
    // Validate metadata
    const metadata: Metadata = {
      title: brokerData.frontmatter.title,
      description: brokerData.frontmatter.description,
    };
    
    // Get keywords for this page
    const keywords = getKeywordsForPage(pagePath);
    const pageMetadataRequirements: MetadataRequirements = {
      ...metadataRequirements,
      requireKeywords: keywords.primary.length > 0,
      primaryKeywords: keywords.primary,
      secondaryKeywords: keywords.secondary,
    };
    
    const metadataResult = validateMetadata(metadata, pagePath, pageMetadataRequirements);
    result.metadataResult = {
      isValid: metadataResult.isValid,
      errors: metadataResult.errors,
      warnings: metadataResult.warnings,
    };
    result.hasMetadata = true;
    
    if (!metadataResult.isValid) {
      result.overallValid = false;
    }
    
    // Check H1 in broker title (broker title is usually the H1)
    if (brokerData.frontmatter.title) {
      result.h1Result = {
        found: true,
        text: brokerData.frontmatter.title,
        warnings: [],
      };
      
      if (keywords.primary.length > 0 && !containsKeyword(brokerData.frontmatter.title, keywords.primary)) {
        result.h1Result.warnings.push(
          `H1 (title) should contain at least one primary keyword: ${keywords.primary.join(', ')}`
        );
      }
    }

    // Validate schemas (we check if they should be present)
    const schemas: any[] = [];
    
    // Breadcrumb should always be present
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://howtoinvestinnifty50.com' },
        { '@type': 'ListItem', position: 2, name: 'Brokers', item: 'https://howtoinvestinnifty50.com/brokers' },
        { '@type': 'ListItem', position: 3, name: brokerData.frontmatter.title, item: `https://howtoinvestinnifty50.com${pagePath}` },
      ],
    });

    // FAQ schema if FAQ data exists
    if (brokerData.faqData && brokerData.faqData.faqs && brokerData.faqData.faqs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: brokerData.faqData.faqs.map((faq: any) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    const schemaResults = validateSchemas(schemas, pagePath, schemaRequirements);
    result.schemaResults = schemaResults.map(sr => ({
      isValid: sr.isValid,
      errors: sr.errors,
      warnings: sr.warnings,
      schemaType: sr.schemaType,
    }));
    result.hasSchemas = schemas.length > 0;

    const hasSchemaErrors = schemaResults.some(sr => !sr.isValid);
    if (hasSchemaErrors) {
      result.overallValid = false;
    }

  } catch (error) {
    result.metadataResult = {
      isValid: false,
      errors: [`Error validating page: ${error instanceof Error ? error.message : String(error)}`],
      warnings: [],
    };
    result.overallValid = false;
  }

  return result;
}

/**
 * Validates a dynamic guide page
 */
export async function validateGuidePage(
  slug: string,
  metadataRequirements?: MetadataRequirements,
  schemaRequirements?: SchemaRequirements
): Promise<PageValidationResult> {
  const pagePath = `/guides/${slug}`;
  const result: PageValidationResult = {
    pagePath,
    pageType: 'dynamic',
    hasMetadata: false,
    hasSchemas: false,
    overallValid: true,
  };

  try {
    const guide = getGuideData(slug);
    
    if (!guide) {
      result.metadataResult = {
        isValid: false,
        errors: ['Guide not found'],
        warnings: [],
      };
      result.overallValid = false;
      return result;
    }

    // Validate metadata
    const metadata: Metadata = {
      title: guide.frontmatter.title,
      description: guide.frontmatter.excerpt || guide.frontmatter.title,
    };
    
    // Get keywords for this page
    const keywords = getKeywordsForPage(pagePath);
    const pageMetadataRequirements: MetadataRequirements = {
      ...metadataRequirements,
      requireKeywords: keywords.primary.length > 0,
      primaryKeywords: keywords.primary,
      secondaryKeywords: keywords.secondary,
    };
    
    const metadataResult = validateMetadata(metadata, pagePath, pageMetadataRequirements);
    result.metadataResult = {
      isValid: metadataResult.isValid,
      errors: metadataResult.errors,
      warnings: metadataResult.warnings,
    };
    result.hasMetadata = true;
    
    if (!metadataResult.isValid) {
      result.overallValid = false;
    }
    
    // Check H1 in guide title (guide title is usually the H1)
    if (guide.frontmatter.title) {
      result.h1Result = {
        found: true,
        text: guide.frontmatter.title,
        warnings: [],
      };
      
      if (keywords.primary.length > 0 && !containsKeyword(guide.frontmatter.title, keywords.primary)) {
        result.h1Result.warnings.push(
          `H1 (title) should contain at least one primary keyword: ${keywords.primary.join(', ')}`
        );
      }
    }

    // Validate schemas
    const schemas: any[] = [];
    
    // Breadcrumb
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://howtoinvestinnifty50.com' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://howtoinvestinnifty50.com/guides' },
        { '@type': 'ListItem', position: 3, name: guide.frontmatter.title, item: `https://howtoinvestinnifty50.com${pagePath}` },
      ],
    });

    // Article
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: guide.frontmatter.title,
      description: guide.frontmatter.excerpt || guide.frontmatter.title,
      url: `https://howtoinvestinnifty50.com${pagePath}`,
      publisher: {
        '@type': 'Organization',
        name: 'How to Invest in NIFTY 50',
      },
    });

    const schemaResults = validateSchemas(schemas, pagePath, schemaRequirements);
    result.schemaResults = schemaResults.map(sr => ({
      isValid: sr.isValid,
      errors: sr.errors,
      warnings: sr.warnings,
      schemaType: sr.schemaType,
    }));
    result.hasSchemas = true;

    const hasSchemaErrors = schemaResults.some(sr => !sr.isValid);
    if (hasSchemaErrors) {
      result.overallValid = false;
    }

  } catch (error) {
    result.metadataResult = {
      isValid: false,
      errors: [`Error validating page: ${error instanceof Error ? error.message : String(error)}`],
      warnings: [],
    };
    result.overallValid = false;
  }

  return result;
}

/**
 * Validates all pages in the application
 */
export async function validateAllPages(
  metadataRequirements?: MetadataRequirements,
  schemaRequirements?: SchemaRequirements
): Promise<ValidationReport> {
  const pages: PageValidationResult[] = [];

  // Validate static pages
  const staticPages = [
    'app/page.tsx',
    'app/about/page.tsx',
    'app/contact/page.tsx',
    'app/faq/page.tsx',
    'app/glossary/page.tsx',
    'app/legal/page.tsx',
    'app/privacy/page.tsx',
    'app/terms/page.tsx',
    'app/accessibility/page.tsx',
    'app/advertiser-disclosure/page.tsx',
    'app/about/disclaimer/page.tsx',
    'app/about/editorial-guidelines/page.tsx',
    'app/about/how-we-make-money/page.tsx',
    'app/about/review-methodology/page.tsx',
  ];

  for (const pagePath of staticPages) {
    const fullPath = path.join(process.cwd(), pagePath);
    if (fs.existsSync(fullPath)) {
      const result = await validateStaticPage(fullPath, metadataRequirements, schemaRequirements);
      pages.push(result);
    }
  }

  // Validate dynamic broker pages
  const brokerSlugs = getAllBrokerSlugs();
  for (const slug of brokerSlugs) {
    const result = await validateBrokerPage(slug, metadataRequirements, schemaRequirements);
    pages.push(result);
  }

  // Validate dynamic guide pages
  const guides = getAllGuides();
  for (const guide of guides) {
    const result = await validateGuidePage(guide.slug, metadataRequirements, schemaRequirements);
    pages.push(result);
  }

  // Calculate summary
  const validPages = pages.filter(p => p.overallValid).length;
  const invalidPages = pages.length - validPages;
  
  let metadataErrors = 0;
  let metadataWarnings = 0;
  let schemaErrors = 0;
  let schemaWarnings = 0;

  pages.forEach(page => {
    if (page.metadataResult) {
      metadataErrors += page.metadataResult.errors.length;
      metadataWarnings += page.metadataResult.warnings.length;
    }
    if (page.schemaResults) {
      page.schemaResults.forEach(sr => {
        schemaErrors += sr.errors.length;
        schemaWarnings += sr.warnings.length;
      });
    }
  });

  return {
    totalPages: pages.length,
    validPages,
    invalidPages,
    pages,
    summary: {
      metadataErrors,
      metadataWarnings,
      schemaErrors,
      schemaWarnings,
    },
  };
}

