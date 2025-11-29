/**
 * Metadata validation utilities
 */

import type { Metadata } from 'next';

export interface MetadataValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  pagePath: string;
}

export interface MetadataRequirements {
  requireTitle?: boolean;
  requireDescription?: boolean;
  minTitleLength?: number;
  maxTitleLength?: number;
  minDescriptionLength?: number;
  maxDescriptionLength?: number;
  requireRobots?: boolean;
  requireKeywords?: boolean;
  primaryKeywords?: string[]; // Main keywords that should appear in title/description
  secondaryKeywords?: string[]; // Optional secondary keywords
}

const DEFAULT_REQUIREMENTS: MetadataRequirements = {
  requireTitle: true,
  requireDescription: true,
  minTitleLength: 30,
  maxTitleLength: 60,
  minDescriptionLength: 120,
  maxDescriptionLength: 155, // Google optimal: 150-155 chars to avoid truncation
  requireRobots: false,
};

/**
 * Validates metadata object
 */
export function validateMetadata(
  metadata: Metadata | undefined,
  pagePath: string,
  requirements: MetadataRequirements = DEFAULT_REQUIREMENTS
): MetadataValidationResult {
  const result: MetadataValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    pagePath,
  };

  if (!metadata) {
    result.isValid = false;
    result.errors.push('Metadata is missing');
    return result;
  }

  // Check title
  const title = typeof metadata.title === 'string' ? metadata.title : metadata.title?.absolute || metadata.title?.default || '';
  
  if (requirements.requireTitle) {
    if (!title) {
      result.isValid = false;
      result.errors.push('Title is required but missing');
    } else {
      if (requirements.minTitleLength && title.length < requirements.minTitleLength) {
        result.warnings.push(`Title is too short (${title.length} chars, recommended: ${requirements.minTitleLength}+)`);
      }
      if (requirements.maxTitleLength && title.length > requirements.maxTitleLength) {
        result.warnings.push(`Title is too long (${title.length} chars, recommended: ${requirements.maxTitleLength} max)`);
      }
    }
  }

  // Check description
  const description = metadata.description || '';
  
  if (requirements.requireDescription) {
    if (!description) {
      result.isValid = false;
      result.errors.push('Description is required but missing');
    } else {
      if (requirements.minDescriptionLength && description.length < requirements.minDescriptionLength) {
        result.warnings.push(`Description is too short (${description.length} chars, recommended: ${requirements.minDescriptionLength}+)`);
      }
      if (requirements.maxDescriptionLength && description.length > requirements.maxDescriptionLength) {
        result.warnings.push(`Description is too long (${description.length} chars, recommended: ${requirements.maxDescriptionLength} max)`);
      }
    }
  }

  // Check robots
  if (requirements.requireRobots && !metadata.robots) {
    result.warnings.push('Robots meta tag is recommended for SEO');
  }

  // Check keywords in title and description
  if (requirements.requireKeywords && requirements.primaryKeywords && requirements.primaryKeywords.length > 0) {
    const titleLower = title.toLowerCase();
    const descriptionLower = description.toLowerCase();
    
    // Check if at least one primary keyword appears in title
    const titleHasKeyword = requirements.primaryKeywords.some(keyword => 
      titleLower.includes(keyword.toLowerCase())
    );
    
    if (!titleHasKeyword) {
      result.warnings.push(`Title should contain at least one primary keyword: ${requirements.primaryKeywords.join(', ')}`);
    }
    
    // Check if at least one primary keyword appears in description
    const descriptionHasKeyword = requirements.primaryKeywords.some(keyword => 
      descriptionLower.includes(keyword.toLowerCase())
    );
    
    if (!descriptionHasKeyword) {
      result.warnings.push(`Description should contain at least one primary keyword: ${requirements.primaryKeywords.join(', ')}`);
    }
  }

  return result;
}

/**
 * Validates metadata from generateMetadata function
 */
export async function validateGeneratedMetadata(
  generateMetadataFn: (() => Promise<Metadata>) | (() => Metadata) | undefined,
  pagePath: string,
  params?: any,
  requirements: MetadataRequirements = DEFAULT_REQUIREMENTS
): Promise<MetadataValidationResult> {
  if (!generateMetadataFn) {
    return {
      isValid: false,
      errors: ['generateMetadata function is missing'],
      warnings: [],
      pagePath,
    };
  }

  try {
    const metadata = await Promise.resolve(generateMetadataFn());
    return validateMetadata(metadata, pagePath, requirements);
  } catch (error) {
    return {
      isValid: false,
      errors: [`Error generating metadata: ${error instanceof Error ? error.message : String(error)}`],
      warnings: [],
      pagePath,
    };
  }
}

