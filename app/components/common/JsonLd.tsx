import {
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateReviewSchema,
  generateItemListSchema,
  generateHowToSchema,
  generateRatingSchema,
  generateCollectionPageSchema,
  generateWebPageSchema,
} from '@/lib/schema';

interface JsonLdProps {
  data: object;
}

/**
 * Component to render JSON-LD structured data
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 2) }}
    />
  );
}

// Re-export schema generation functions for convenience
export {
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateReviewSchema,
  generateItemListSchema,
  generateHowToSchema,
  generateRatingSchema,
  generateCollectionPageSchema,
  generateWebPageSchema,
};

