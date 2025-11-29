/**
 * Utility functions for generating SEO-optimized metadata
 */

import type { Metadata } from 'next';
import { getKeywordsForPage } from './keywords';

/**
 * Truncates text to a maximum length, ensuring it ends at a word boundary
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @param suffix - Suffix to add if truncated (default: '...')
 * @returns Truncated text
 */
export function truncateText(text: string, maxLength: number, suffix: string = '...'): string {
  if (!text || text.length <= maxLength) {
    return text;
  }

  // Find the last space before maxLength
  const truncated = text.substring(0, maxLength - suffix.length);
  const lastSpace = truncated.lastIndexOf(' ');

  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + suffix;
  }

  return truncated + suffix;
}

/**
 * Generates SEO-optimized title for author pages
 * Creates meaningful, readable titles with key SEO terms
 * @param authorName - Author's name
 * @param role - Author's role
 * @param maxLength - Maximum length (default: 60)
 * @returns SEO-optimized title
 */
export function generateAuthorTitle(authorName: string, role: string, maxLength: number = 60): string {
  // Extract key role terms for SEO
  const roleKeywords = extractRoleKeywords(role);
  
  // Build title: Name - Role Keywords | Site Name
  // Try different combinations to fit within limit
  const siteName = 'How to Invest in NIFTY 50';
  const baseTitle = `${authorName} - ${roleKeywords} | ${siteName}`;
  
  if (baseTitle.length <= maxLength) {
    return baseTitle;
  }

  // If too long, try without site name
  const titleWithoutSite = `${authorName} - ${roleKeywords}`;
  if (titleWithoutSite.length <= maxLength) {
    return titleWithoutSite;
  }

  // If still too long, shorten role keywords
  const shortRole = truncateText(roleKeywords, maxLength - authorName.length - 3, '');
  return `${authorName} - ${shortRole}`;
}

/**
 * Extracts SEO-friendly keywords from author role
 * @param role - Author's role
 * @returns SEO-optimized role keywords
 */
function extractRoleKeywords(role: string): string {
  // Map common roles to SEO-friendly terms
  const roleMappings: { [key: string]: string } = {
    'Chief Editor': 'Financial Editor',
    'Senior Financial Analyst': 'Financial Analyst',
    'Investment Research Analyst': 'Investment Analyst',
    'Market Research Specialist': 'Market Analyst',
    'Financial Content Strategist': 'Financial Writer',
    'Quantitative Data Analyst': 'Data Analyst',
  };

  // Check for exact matches first
  for (const [key, value] of Object.entries(roleMappings)) {
    if (role.includes(key)) {
      return value;
    }
  }

  // Extract key terms
  const keywords = role
    .split(/[&\s]+/)
    .filter(word => 
      word.length > 3 && 
      !['and', 'the', 'for', 'with'].includes(word.toLowerCase())
    )
    .slice(0, 3)
    .join(' ');

  return keywords || role;
}

/**
 * Generates SEO-optimized description for author pages
 * Creates meaningful descriptions that highlight expertise and include SEO keywords
 * @param author - Author object with bio, role, specializations
 * @param minLength - Minimum length (default: 120)
 * @param maxLength - Maximum length (default: 155) - Google optimal: 150-155 to avoid truncation
 * @returns SEO-optimized description
 */
export function generateAuthorDescription(
  author: { 
    name: string; 
    role: string; 
    shortBio: string; 
    bio: string; 
    specializations: string[];
    articlesCount: number;
  },
  minLength: number = 120,
  maxLength: number = 155
): string {
  // Build SEO-optimized description
  const parts: string[] = [];
  
  // Start with name and role
  parts.push(`${author.name} is a ${author.role.toLowerCase()}`);
  
  // Add key specializations (prioritize Nifty 50, Indian markets, investing)
  const keySpecs = author.specializations
    .filter(spec => 
      spec.toLowerCase().includes('nifty') || 
      spec.toLowerCase().includes('indian') ||
      spec.toLowerCase().includes('invest') ||
      spec.toLowerCase().includes('broker')
    )
    .slice(0, 2);
  
  if (keySpecs.length > 0) {
    const specText = keySpecs.length === 1 
      ? keySpecs[0].toLowerCase()
      : `${keySpecs[0].toLowerCase()} and ${keySpecs[1].toLowerCase()}`;
    parts.push(`specializing in ${specText}`);
  }
  
  // Add credibility indicators
  if (author.articlesCount > 0) {
    parts.push(`with ${author.articlesCount}+ published articles`);
  }
  
  // Add value proposition
  parts.push('on Nifty 50 investing and Indian stock markets.');
  
  let description = parts.join(' ');
  
  // If too short, add more from shortBio
  if (description.length < minLength && author.shortBio) {
    const additional = author.shortBio
      .split('.')
      .find(sentence => sentence.length > 20 && sentence.length < 60);
    if (additional) {
      description = `${description} ${additional.trim()}.`;
    }
  }
  
  // If still too short, use shortBio as base and enhance
  if (description.length < minLength) {
    description = enhanceShortBio(author.shortBio || author.bio, author.role, author.specializations);
  }
  
  // Ensure it fits within limits
  if (description.length > maxLength) {
    description = truncateText(description, maxLength);
  }
  
  // Ensure minimum length
  if (description.length < minLength && author.shortBio) {
    description = author.shortBio;
    if (description.length > maxLength) {
      description = truncateText(description, maxLength);
    }
  }
  
  return description;
}

/**
 * Enhances short bio with SEO keywords
 */
function enhanceShortBio(
  bio: string, 
  role: string, 
  specializations: string[]
): string {
  if (!bio) return '';
  
  // If bio already contains key terms, use as is
  const hasKeyTerms = bio.toLowerCase().includes('nifty') || 
                     bio.toLowerCase().includes('indian') ||
                     bio.toLowerCase().includes('invest');
  
  if (hasKeyTerms && bio.length >= 120 && bio.length <= 155) {
    return bio;
  }
  
  // Enhance with role and specializations
  const roleKeyword = extractRoleKeywords(role);
  const topSpec = specializations.find(s => 
    s.toLowerCase().includes('nifty') || 
    s.toLowerCase().includes('indian')
  ) || specializations[0] || '';
  
  if (bio.length < 120) {
    const enhancement = topSpec 
      ? ` Expert in ${topSpec.toLowerCase()}.`
      : ` ${roleKeyword} with expertise in Indian financial markets.`;
    return (bio + enhancement).substring(0, 155);
  }
  
  return bio;
}

/**
 * Generates SEO-optimized description for guide pages
 * Creates meaningful descriptions from title and excerpt
 * @param title - Guide title
 * @param excerpt - Guide excerpt (optional)
 * @param minLength - Minimum length (default: 120)
 * @param maxLength - Maximum length (default: 155) - Google optimal: 150-155 to avoid truncation
 * @returns SEO-optimized description
 */
export function generateGuideDescription(
  title: string,
  excerpt?: string,
  minLength: number = 120,
  maxLength: number = 155
): string {
  // If excerpt exists and is in optimal range, use it
  if (excerpt && excerpt.length >= minLength && excerpt.length <= maxLength) {
    return excerpt;
  }

  // If excerpt exists but is too short, enhance it
  if (excerpt && excerpt.length > 0 && excerpt.length < minLength) {
    // Try to create a meaningful description from excerpt + title context
    const enhanced = enhanceGuideExcerpt(excerpt, title);
    if (enhanced.length >= minLength && enhanced.length <= maxLength) {
      return enhanced;
    }
  }

  // If no excerpt or excerpt is too long, create from title
  if (!excerpt || excerpt.length > maxLength) {
    return createDescriptionFromTitle(title, minLength, maxLength);
  }

  // Fallback: use excerpt as is (will be truncated if needed)
  return excerpt.length > maxLength ? truncateText(excerpt, maxLength) : excerpt;
}

/**
 * Enhances guide excerpt with SEO keywords
 */
function enhanceGuideExcerpt(excerpt: string, title: string): string {
  // Extract key terms from title
  const titleTerms = extractKeyTerms(title);
  
  // Check if excerpt already has key terms
  const hasKeyTerms = titleTerms.some(term => 
    excerpt.toLowerCase().includes(term.toLowerCase())
  );

  if (hasKeyTerms) {
    // Excerpt already has relevant terms, just ensure it's complete
    if (!excerpt.endsWith('.') && !excerpt.endsWith('!') && !excerpt.endsWith('?')) {
      return excerpt + '.';
    }
    return excerpt;
  }

  // Add context from title
  const context = ` Learn ${title.toLowerCase()} with our comprehensive guide.`;
    return (excerpt + context).substring(0, 155);
}

/**
 * Creates description from title when excerpt is missing
 */
function createDescriptionFromTitle(title: string, minLength: number, maxLength: number): string {
  // Extract key terms
  const keyTerms = extractKeyTerms(title);
  
  // Build description based on title type
  if (title.toLowerCase().startsWith('how to')) {
    return `Learn ${title.substring(7).toLowerCase()}. Step-by-step guide for Indian investors on Nifty 50 investing, broker selection, and portfolio management.`;
  }
  
  if (title.toLowerCase().includes('guide')) {
    return `Comprehensive guide on ${keyTerms.join(' and ')}. Expert insights for investing in Nifty 50 and Indian stock markets.`;
  }

  // Generic description
  return `Learn about ${title.toLowerCase()}. Expert guide for Indian investors covering Nifty 50, stock market investing, and portfolio strategies.`;
}

/**
 * Extracts key terms from text for SEO
 */
function extractKeyTerms(text: string): string[] {
  const stopWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'how', 'to'];
  return text
    .toLowerCase()
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.includes(word))
    .slice(0, 5);
}

/**
 * Generates standard metadata fields including robots, keywords, and publisher
 * @param options - Metadata options
 * @returns Standard metadata fields
 */
export interface StandardMetadataOptions {
  title: string;
  description: string;
  url: string;
  pagePath?: string;
  robots?: {
    index?: boolean;
    follow?: boolean;
    noarchive?: boolean;
    nosnippet?: boolean;
    noimageindex?: boolean;
  };
  keywords?: string[];
  publisher?: string;
  publisherUrl?: string;
  language?: string;
}

export function generateStandardMetadata(options: StandardMetadataOptions): Partial<Metadata> {
  const {
    title,
    description,
    url,
    pagePath = '/',
    robots = { index: true, follow: true },
    keywords,
    publisher = 'How to Invest in NIFTY 50',
    publisherUrl = 'https://howtoinvestinnifty50.com',
    language = 'en-IN',
  } = options;

  // Get keywords for page if not provided
  const pageKeywords = keywords || getKeywordsForPage(pagePath);
  const keywordsString = Array.isArray(pageKeywords)
    ? pageKeywords.join(', ')
    : typeof pageKeywords === 'object' && pageKeywords.primary
    ? [...pageKeywords.primary, ...(pageKeywords.secondary || [])].join(', ')
    : '';

  // Build robots string
  const robotsParts: string[] = [];
  if (robots.index === false) {
    robotsParts.push('noindex');
  } else {
    robotsParts.push('index');
  }
  if (robots.follow === false) {
    robotsParts.push('nofollow');
  } else {
    robotsParts.push('follow');
  }
  if (robots.noarchive) robotsParts.push('noarchive');
  if (robots.nosnippet) robotsParts.push('nosnippet');
  if (robots.noimageindex) robotsParts.push('noimageindex');

  const metadata: Partial<Metadata> = {
    robots: robotsParts.join(', '),
    other: {
      'keywords': keywordsString,
      'publisher': publisher,
      'geo.region': 'IN',
      'geo.placename': 'India',
      'geo.position': '20.5937;78.9629',
      'ICBM': '20.5937, 78.9629',
    },
    alternates: {
      canonical: url,
      languages: {
        [language]: url,
        'x-default': url,
      },
    },
  };

  return metadata;
}

