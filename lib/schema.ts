/**
 * Utility functions for generating JSON-LD structured data (Schema.org)
 */

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generates FAQPage schema (JSON-LD)
 */
export function generateFAQSchema(faqs: FAQItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates BreadcrumbList schema (JSON-LD)
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generates Person schema (JSON-LD)
 * For author pages and EEAT compliance
 */
export function generatePersonSchema({
  name,
  url,
  jobTitle,
  description,
  image,
  sameAs = [],
  worksFor,
  alumniOf,
  knowsAbout = [],
}: {
  name: string;
  url: string;
  jobTitle?: string;
  description?: string;
  image?: string;
  sameAs?: string[];
  worksFor?: {
    '@type': string;
    name: string;
  };
  alumniOf?: Array<{
    '@type': string;
    name: string;
  }>;
  knowsAbout?: string[];
}): object {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: name,
    url: url,
  };

  if (jobTitle) {
    schema.jobTitle = jobTitle;
  }

  if (description) {
    schema.description = description;
  }

  if (image) {
    schema.image = {
      '@type': 'ImageObject',
      url: image,
    };
  }

  if (worksFor) {
    schema.worksFor = worksFor;
  }

  if (alumniOf && alumniOf.length > 0) {
    schema.alumniOf = alumniOf;
  }

  if (knowsAbout && knowsAbout.length > 0) {
    schema.knowsAbout = knowsAbout;
  }

  if (sameAs && sameAs.length > 0) {
    schema.sameAs = sameAs;
  }

  return schema;
}

/**
 * Generates Article schema (JSON-LD)
 * Updated to support Person authors for EEAT
 */
export function generateArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
  authorName,
  reviewer,
  reviewerName,
  publisherName = 'How to Invest in NIFTY 50',
  publisherLogo,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    name: string;
    url: string;
    type?: 'Person' | 'Organization';
  };
  authorName?: string; // Fallback for backward compatibility
  reviewer?: {
    name: string;
    url: string;
    type?: 'Person' | 'Organization';
  };
  reviewerName?: string;
  publisherName?: string;
  publisherLogo?: string;
  image?: string;
}): object {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    inLanguage: 'en-IN',
    publisher: {
      '@type': 'Organization',
      name: publisherName,
    },
  };

  if (datePublished) {
    schema.datePublished = datePublished;
  }

  if (dateModified) {
    schema.dateModified = dateModified;
  }

  // Author - prefer Person over Organization for EEAT
  if (author) {
    schema.author = {
      '@type': author.type || 'Person',
      name: author.name,
      url: author.url,
    };
  } else if (authorName) {
    // Fallback for backward compatibility
    schema.author = {
      '@type': 'Organization',
      name: authorName,
    };
  }

  // Reviewer - for fact-checking and editorial review
  if (reviewer) {
    schema.reviewedBy = {
      '@type': reviewer.type || 'Person',
      name: reviewer.name,
      url: reviewer.url,
    };
  } else if (reviewerName) {
    schema.reviewedBy = {
      '@type': 'Organization',
      name: reviewerName,
    };
  }

  if (publisherLogo) {
    schema.publisher.logo = {
      '@type': 'ImageObject',
      url: publisherLogo,
    };
  }

  if (image) {
    schema.image = {
      '@type': 'ImageObject',
      url: image,
    };
  }

  return schema;
}

/**
 * Generates Organization schema (JSON-LD)
 */
export function generateOrganizationSchema({
  name = 'How to Invest in NIFTY 50',
  url = 'https://howtoinvestinnifty50.com',
  logo,
  description = "Your comprehensive guide to investing in India's benchmark index.",
  contactPoint,
  sameAs = [],
}: {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  contactPoint?: {
    telephone?: string;
    contactType?: string;
    email?: string;
  };
  sameAs?: string[];
}): object {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: name,
    url: url,
    description: description,
  };

  if (logo) {
    schema.logo = {
      '@type': 'ImageObject',
      url: logo,
    };
  }

  if (contactPoint) {
    schema.contactPoint = {
      '@type': 'ContactPoint',
      ...contactPoint,
    };
  }

  if (sameAs.length > 0) {
    schema.sameAs = sameAs;
  }

  // Add geo-targeting for India
  schema.areaServed = {
    '@type': 'Country',
    name: 'India',
    identifier: 'IN',
  };

  return schema;
}

/**
 * Generates WebSite schema (JSON-LD)
 */
export function generateWebSiteSchema({
  name = 'How to Invest in NIFTY 50',
  url = 'https://howtoinvestinnifty50.com',
  description = "Your comprehensive guide to investing in India's benchmark index.",
  potentialAction,
}: {
  name?: string;
  url?: string;
  description?: string;
  potentialAction?: {
    '@type': string;
    target: {
      '@type': string;
      urlTemplate: string;
    };
    'query-input': string;
  };
}): object {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: name,
    url: url,
    description: description,
    inLanguage: 'en-IN',
  };

  if (potentialAction) {
    schema.potentialAction = potentialAction;
  }

  return schema;
}

/**
 * Generates Review schema (JSON-LD)
 * Critical for broker review pages - enables star ratings in search results
 */
export function generateReviewSchema({
  itemName,
  itemType = 'FinancialService',
  itemDescription,
  ratingValue,
  bestRating = 5,
  worstRating = 1,
  reviewBody,
  authorName = 'How to Invest in NIFTY 50',
  authorType = 'Organization',
  datePublished,
  dateModified,
}: {
  itemName: string;
  itemType?: string;
  itemDescription?: string;
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
  reviewBody: string;
  authorName?: string;
  authorType?: string;
  datePublished?: string;
  dateModified?: string;
}): object {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': itemType,
      name: itemName,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: ratingValue.toString(),
      bestRating: bestRating.toString(),
      worstRating: worstRating.toString(),
    },
    author: {
      '@type': authorType,
      name: authorName,
    },
    reviewBody: reviewBody,
  };

  if (itemDescription) {
    schema.itemReviewed.description = itemDescription;
  }

  if (datePublished) {
    schema.datePublished = datePublished;
  }

  if (dateModified) {
    schema.dateModified = dateModified;
  }

  return schema;
}

/**
 * Generates ItemList schema (JSON-LD)
 * For lists of brokers, comparisons, rankings
 */
export function generateItemListSchema({
  name,
  description,
  items,
}: {
  name: string;
  description?: string;
  items: Array<{
    name: string;
    url?: string;
    description?: string;
    itemType?: string;
  }>;
}): object {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: name,
    itemListElement: items.map((item, index) => {
      const listItem: any = {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': item.itemType || 'Thing',
          name: item.name,
        },
      };

      if (item.url) {
        listItem.item.url = item.url;
      }

      if (item.description) {
        listItem.item.description = item.description;
      }

      return listItem;
    }),
  };

  if (description) {
    schema.description = description;
  }

  return schema;
}

/**
 * Generates HowTo schema (JSON-LD)
 * For step-by-step guides
 */
export function generateHowToSchema({
  name,
  description,
  steps,
  totalTime,
  image,
  estimatedCost,
}: {
  name: string;
  description: string;
  steps: Array<{
    name: string;
    text: string;
    image?: string;
    url?: string;
  }>;
  totalTime?: string; // ISO 8601 duration, e.g., "PT30M" for 30 minutes
  image?: string;
  estimatedCost?: {
    currency: string;
    value: string;
  };
}): object {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    step: steps.map((step, index) => {
      const howToStep: any = {
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
      };

      if (step.image) {
        howToStep.image = step.image;
      }

      if (step.url) {
        howToStep.url = step.url;
      }

      return howToStep;
    }),
  };

  if (totalTime) {
    schema.totalTime = totalTime;
  }

  if (image) {
    schema.image = {
      '@type': 'ImageObject',
      url: image,
    };
  }

  if (estimatedCost) {
    schema.estimatedCost = {
      '@type': 'MonetaryAmount',
      currency: estimatedCost.currency,
      value: estimatedCost.value,
    };
  }

  return schema;
}

/**
 * Generates Rating schema (JSON-LD)
 * Standalone rating for products/services
 */
export function generateRatingSchema({
  itemName,
  itemType = 'Thing',
  ratingValue,
  bestRating = 5,
  worstRating = 1,
  reviewCount,
}: {
  itemName: string;
  itemType?: string;
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
  reviewCount?: number;
}): object {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': itemType,
    name: itemName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue.toString(),
      bestRating: bestRating.toString(),
      worstRating: worstRating.toString(),
    },
  };

  if (reviewCount) {
    schema.aggregateRating.reviewCount = reviewCount.toString();
  }

  return schema;
}

/**
 * Generates CollectionPage schema (JSON-LD)
 * For pages that list multiple items (brokers, guides, etc.)
 */
export function generateCollectionPageSchema({
  name,
  description,
  url,
  mainEntity,
}: {
  name: string;
  description?: string;
  url: string;
  mainEntity?: {
    '@type': string;
    numberOfItems?: number;
    itemListElement?: any[];
  };
}): object {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: name,
    url: url,
  };

  if (description) {
    schema.description = description;
  }

  if (mainEntity) {
    schema.mainEntity = mainEntity;
  }

  return schema;
}

/**
 * Generates WebPage schema (JSON-LD)
 * For standard web pages
 */
export function generateWebPageSchema({
  name,
  description,
  url,
  inLanguage = 'en-IN',
  isPartOf,
  datePublished,
  dateModified,
  breadcrumb,
}: {
  name: string;
  description?: string;
  url: string;
  inLanguage?: string;
  isPartOf?: {
    '@type': string;
    name: string;
    url: string;
  };
  datePublished?: string;
  dateModified?: string;
  breadcrumb?: BreadcrumbItem[];
}): object {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: name,
    url: url,
    inLanguage: inLanguage,
  };

  if (description) {
    schema.description = description;
  }

  if (isPartOf) {
    schema.isPartOf = {
      '@type': isPartOf['@type'],
      name: isPartOf.name,
      url: isPartOf.url,
    };
  }

  if (datePublished) {
    schema.datePublished = datePublished;
  }

  if (dateModified) {
    schema.dateModified = dateModified;
  }

  if (breadcrumb && breadcrumb.length > 0) {
    schema.breadcrumb = generateBreadcrumbSchema(breadcrumb);
  }

  return schema;
}

/**
 * Renders JSON-LD script tag
 */
export function renderJsonLd(schema: object): string {
  return `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`;
}

