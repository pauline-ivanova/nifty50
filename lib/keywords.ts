/**
 * Keyword definitions for SEO validation
 * Defines primary and secondary keywords for each page type
 */

export interface PageKeywords {
  primary: string[];
  secondary?: string[];
}

/**
 * Get keywords for a specific page path
 */
export function getKeywordsForPage(pagePath: string): PageKeywords {
  // Main site keyword
  const mainKeyword = ['nifty 50', 'Nifty 50', 'NIFTY 50'];
  
  // Homepage
  if (pagePath === '/' || pagePath === '') {
    return {
      primary: ['nifty 50', 'invest in nifty 50', 'Nifty 50'],
      secondary: ['Indian stock market', 'index investing', 'ETFs'],
    };
  }
  
  // Authors pages
  if (pagePath.startsWith('/authors')) {
    return {
      primary: ['nifty 50', 'financial analyst', 'investment expert'],
      secondary: ['Indian markets', 'stock market'],
    };
  }
  
  // Brokers pages
  if (pagePath.startsWith('/brokers')) {
    return {
      primary: ['broker', 'stock broker', 'nifty 50'],
      secondary: ['SEBI', 'trading platform', 'Demat account'],
    };
  }
  
  // Guides pages
  if (pagePath.startsWith('/guides')) {
    return {
      primary: ['nifty 50', 'invest', 'guide'],
      secondary: ['Indian stock market', 'ETFs', 'index funds'],
    };
  }
  
  // About pages
  if (pagePath.startsWith('/about')) {
    return {
      primary: ['nifty 50', 'investment'],
      secondary: ['Indian stock market'],
    };
  }
  
  // Legal/Policy pages - less strict keyword requirements
  if (pagePath.startsWith('/legal') || 
      pagePath.startsWith('/privacy') || 
      pagePath.startsWith('/terms') ||
      pagePath.startsWith('/accessibility') ||
      pagePath.startsWith('/advertiser-disclosure') ||
      pagePath.startsWith('/contact') ||
      pagePath.startsWith('/faq') ||
      pagePath.startsWith('/sitemap')) {
    return {
      primary: [], // These pages don't need strict keyword requirements
      secondary: [],
    };
  }
  
  // Glossary
  if (pagePath.startsWith('/glossary')) {
    return {
      primary: ['nifty 50', 'financial terms', 'investment'],
      secondary: ['Indian stock market', 'glossary'],
    };
  }
  
  // Default: require main keyword
  return {
    primary: mainKeyword,
    secondary: ['Indian stock market', 'investing'],
  };
}

/**
 * Check if text contains at least one of the keywords (case-insensitive)
 */
export function containsKeyword(text: string, keywords: string[]): boolean {
  if (!text || keywords.length === 0) return true; // No keywords = no requirement
  
  const textLower = text.toLowerCase();
  return keywords.some(keyword => textLower.includes(keyword.toLowerCase()));
}

/**
 * Extract H1 from page content (simple regex-based extraction)
 */
export function extractH1FromContent(content: string): string | null {
  // Try to find H1 in JSX: <h1...>text</h1>
  const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  if (h1Match) {
    return h1Match[1].trim();
  }
  
  // Try to find H1 in JSX with className: <h1 className="...">text</h1>
  const h1WithClassMatch = content.match(/<h1[^>]*className[^>]*>([^<]+)<\/h1>/i);
  if (h1WithClassMatch) {
    return h1WithClassMatch[1].trim();
  }
  
  // Try to find H1 in template literals or JSX children
  const h1InTemplateMatch = content.match(/h1[^>]*>\s*\{?([^}<]+)\}?\s*<\/h1>/i);
  if (h1InTemplateMatch) {
    return h1InTemplateMatch[1].trim();
  }
  
  return null;
}

