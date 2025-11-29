/**
 * Authors data and utility functions
 * EEAT implementation - Author profiles for trust and authority
 */

export interface AuthorEducation {
  degree: string;
  institution: string;
  year: number;
}

export interface AuthorCertification {
  name: string;
  issuer?: string;
  year?: number;
}

export interface AuthorExperience {
  company: string;
  role: string;
  period: string;
  description?: string;
}

export interface Author {
  name: string;
  slug: string;
  role: string;
  bio: string;
  shortBio: string;
  education: AuthorEducation[];
  certifications: AuthorCertification[];
  experience: AuthorExperience[];
  specializations: string[];
  articlesCount: number;
  languages: string[];
  image?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export const authors: Author[] = [
  {
    name: "Priya Sharma",
    slug: "priya-sharma",
    role: "Chief Editor & Senior Financial Analyst",
    bio: "Priya started her career in 2011 as a junior analyst at a small boutique advisory firm in Pune, where she learned the fundamentals of equity research by covering mid-cap companies. After three years, she moved to ICICI Securities as a research associate, focusing initially on sector reports before transitioning to index analysis. Her interest in broker platforms developed when she began testing different trading interfaces for her own research workflow. In 2019, she took a sabbatical to complete her CFA Level III and returned to lead editorial initiatives. Priya's approach combines hands-on trading experience with analytical rigor.",
    shortBio: "12+ years in Indian financial markets. Expert in Nifty 50, broker analysis, and portfolio management.",
    education: [
      {
        degree: "B.Com (Hons)",
        institution: "Fergusson College, Pune",
        year: 2011,
      },
      {
        degree: "MBA in Finance",
        institution: "Indian Institute of Management (IIM) Bangalore",
        year: 2016,
      },
      {
        degree: "CFA Charterholder",
        institution: "CFA Institute",
        year: 2020,
      },
    ],
    certifications: [
      {
        name: "NISM Series VIII: Equity Derivatives",
        year: 2018,
      },
    ],
    experience: [
      {
        company: "ICICI Securities",
        role: "Senior Research Analyst",
        period: "2014-2020",
        description: "Led equity research team covering large-cap stocks and index composition analysis",
      },
      {
        company: "ICICI Securities",
        role: "Research Associate",
        period: "2014-2017",
        description: "Prepared sector reports and company analysis for institutional clients",
      },
      {
        company: "Pune Advisory Services",
        role: "Junior Analyst",
        period: "2011-2014",
        description: "Covered mid-cap companies and prepared investment notes for retail clients",
      },
    ],
    specializations: [
      "Indian Stock Indices (Nifty 50, Sensex)",
      "Broker Analysis & Comparisons",
      "Long-term Investment Strategies",
      "Portfolio Management",
    ],
    articlesCount: 150,
    languages: ["English", "Hindi", "Marathi"],
  },
  {
    name: "Arjun Patel",
    slug: "arjun-patel",
    role: "Senior Investment Research Analyst",
    bio: "Arjun's path into finance was unconventional. After completing his statistics degree, he worked for two years as a data analyst at a fintech startup that built trading algorithms. This experience gave him deep technical understanding of how broker platforms actually function behind the scenes. He joined Kotak Securities in 2016, initially in their technology team working on platform improvements, before moving to research where he combined his technical knowledge with market analysis. Arjun is known for his methodical testing of broker features and his ability to explain technical concepts clearly.",
    shortBio: "10+ years specializing in broker analysis, platform evaluation, and fee structure research.",
    education: [
      {
        degree: "B.Sc. in Statistics",
        institution: "St. Xavier's College, Mumbai",
        year: 2012,
      },
    ],
    certifications: [
      {
        name: "NISM Series VIII: Equity Derivatives",
        year: 2017,
      },
      {
        name: "NISM Series X-A: Investment Adviser",
        year: 2019,
      },
      {
        name: "Certificate in Algorithmic Trading",
        issuer: "NSE Academy",
        year: 2015,
      },
    ],
    experience: [
      {
        company: "Kotak Securities",
        role: "Research Analyst",
        period: "2018-2021",
        description: "Analyzed broker platforms, fee structures, and trading technology",
      },
      {
        company: "Kotak Securities",
        role: "Platform Technology Specialist",
        period: "2016-2018",
        description: "Worked on trading platform development and user experience improvements",
      },
      {
        company: "TradeTech Solutions",
        role: "Data Analyst",
        period: "2014-2016",
        description: "Developed trading algorithms and analyzed market data patterns",
      },
      {
        company: "Motilal Oswal",
        role: "Intern - Research Division",
        period: "2013",
        description: "Assisted in market research and data collection projects",
      },
    ],
    specializations: [
      "Broker Reviews & Comparisons",
      "Trading Platforms (Kite, Zerodha, Upstox)",
      "Fee Structure Analysis",
      "Demat Account & KYC Processes",
    ],
    articlesCount: 120,
    languages: ["English", "Hindi", "Gujarati"],
  },
  {
    name: "Meera Krishnan",
    slug: "meera-krishnan",
    role: "Market Research Specialist & Index Analyst",
    bio: "Meera began her career in 2013 as a research assistant at India Ratings, where she spent her first year primarily collecting and organizing economic data. She discovered her interest in index analysis while working on a project comparing different market indices for a client report. After moving to CRISIL in 2015, she gradually took on more analytical work, eventually leading their quarterly index performance reports. Meera's strength lies in connecting macroeconomic trends to index movements, something she developed through years of tracking RBI policy impacts on market indices.",
    shortBio: "11+ years analyzing Indian indices, market trends, and ETF performance. Economics background from JNU.",
    education: [
      {
        degree: "M.A. in Economics",
        institution: "Jawaharlal Nehru University (JNU)",
        year: 2013,
      },
      {
        degree: "B.A. (Hons) in Economics",
        institution: "Lady Shri Ram College, Delhi",
        year: 2011,
      },
    ],
    certifications: [
      {
        name: "Certificate in Financial Markets",
        issuer: "NSE Academy",
        year: 2014,
      },
    ],
    experience: [
      {
        company: "CRISIL",
        role: "Market Research Analyst",
        period: "2015-2021",
        description: "Led quarterly index performance analysis and sectoral trend reports",
      },
      {
        company: "India Ratings & Research",
        role: "Research Associate",
        period: "2013-2015",
        description: "Collected economic data and assisted in market research projects",
      },
    ],
    specializations: [
      "NSE & BSE Indices",
      "ETF & Index Funds",
      "Sectoral Analysis",
      "Market Volatility & Trends",
    ],
    articlesCount: 100,
    languages: ["English", "Hindi", "Tamil"],
  },
  {
    name: "Vikram Singh",
    slug: "vikram-singh",
    role: "Financial Content Strategist & Writer",
    bio: "Vikram didn't plan to write about finance. After his journalism degree, he worked as a general news reporter for a regional newspaper in Chandigarh for two years, covering local business stories. A chance assignment to cover a financial literacy workshop sparked his interest in making finance accessible. He moved to Delhi in 2016 to join Business Today as a junior reporter, where he learned finance on the job by interviewing fund managers and reading extensively. His transition to Moneycontrol came after he built a reputation for explaining complex topics simply. Vikram believes good financial writing should feel like a conversation, not a lecture.",
    shortBio: "10+ years creating accessible financial content. Expert in beginner guides and educational articles.",
    education: [
      {
        degree: "M.A. in Journalism",
        institution: "Indian Institute of Mass Communication (IIMC)",
        year: 2014,
      },
    ],
    certifications: [
      {
        name: "Certificate in Financial Journalism",
        issuer: "Times of India Group",
        year: 2017,
      },
    ],
    experience: [
      {
        company: "Moneycontrol",
        role: "Senior Financial Writer",
        period: "2018-2021",
        description: "Created educational content, investment guides, and explainer articles",
      },
      {
        company: "Business Today",
        role: "Financial Journalist",
        period: "2016-2018",
        description: "Wrote articles on personal finance, investing, and market news",
      },
      {
        company: "The Tribune",
        role: "Business Reporter",
        period: "2014-2016",
        description: "Covered local business news and economic developments in Punjab",
      },
    ],
    specializations: [
      "Beginner Investment Guides",
      "Educational Content",
      "Financial Terminology",
      "SIP & Systematic Investing",
    ],
    articlesCount: 200,
    languages: ["English", "Hindi", "Punjabi"],
  },
  {
    name: "Ananya Reddy",
    slug: "ananya-reddy",
    role: "Quantitative Data Analyst & Research Specialist",
    bio: "Ananya's journey into finance was through academia. After her master's from ISI Kolkata, she spent a year as a research assistant at the Reserve Bank of India, working on statistical models for monetary policy research. This experience gave her exposure to large-scale financial data analysis. She joined SBI Mutual Fund in 2015 as a junior quantitative analyst, where she learned the practical side of applying statistical methods to fund performance analysis. Her move to Axis Mutual Fund in 2017 allowed her to lead quantitative research projects. Ananya is meticulous about data accuracy and often catches inconsistencies that others miss.",
    shortBio: "9+ years in quantitative analysis. Statistics background from ISI Kolkata. Expert in data validation and methodology.",
    education: [
      {
        degree: "M.Sc. in Statistics",
        institution: "Indian Statistical Institute (ISI) Kolkata",
        year: 2014,
      },
      {
        degree: "B.Sc. in Mathematics & Statistics",
        institution: "University of Hyderabad",
        year: 2012,
      },
      {
        degree: "Ph.D. in Statistics (Thesis Submitted)",
        institution: "ISI Kolkata",
        year: 2023,
      },
    ],
    certifications: [
      {
        name: "Certificate in Data Science",
        issuer: "IIT Madras",
        year: 2016,
      },
    ],
    experience: [
      {
        company: "Axis Mutual Fund",
        role: "Quantitative Analyst",
        period: "2017-2022",
        description: "Led quantitative research projects and developed statistical models for fund analysis",
      },
      {
        company: "SBI Mutual Fund",
        role: "Junior Quantitative Analyst",
        period: "2015-2017",
        description: "Analyzed fund performance data and assisted in statistical modeling",
      },
      {
        company: "Reserve Bank of India",
        role: "Research Assistant",
        period: "2014-2015",
        description: "Worked on statistical models for monetary policy research",
      },
    ],
    specializations: [
      "Index Data Analysis",
      "Research Methodology",
      "Statistical Performance Analysis",
      "Data Validation & Fact-checking",
    ],
    articlesCount: 80,
    languages: ["English", "Hindi", "Telugu"],
  },
];

/**
 * Get all authors
 */
export function getAllAuthors(): Author[] {
  return authors;
}

/**
 * Get author by slug
 */
export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((author) => author.slug === slug);
}

/**
 * Get authors by specialization
 */
export function getAuthorsBySpecialization(specialization: string): Author[] {
  return authors.filter((author) =>
    author.specializations.some((spec) =>
      spec.toLowerCase().includes(specialization.toLowerCase())
    )
  );
}

/**
 * Get author slugs for static generation
 */
export function getAllAuthorSlugs(): { slug: string }[] {
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

/**
 * Get relevant specialization for an author based on article context
 * Returns a specialization that's most relevant to the article's category and title
 */
export function getRelevantAuthorSpecialization(
  author: Author,
  category?: string,
  title?: string,
  customExpertise?: string
): string | null {
  // If custom expertise is provided in frontmatter, use it
  if (customExpertise) {
    return customExpertise;
  }

  // Keywords from category and title for matching
  const searchKeywords: string[] = [];
  if (category) searchKeywords.push(category.toLowerCase());
  if (title) {
    const titleWords = title.toLowerCase().split(/\s+/);
    searchKeywords.push(...titleWords.filter(word => word.length > 3));
  }

  // Prioritize specializations that match article context
  const scoredSpecs = author.specializations.map(spec => {
    const specLower = spec.toLowerCase();
    let score = 0;
    
    // Check for direct matches with keywords
    for (const keyword of searchKeywords) {
      if (specLower.includes(keyword)) {
        score += 2;
      }
    }
    
    // Prioritize certain keywords
    if (specLower.includes('nifty') || specLower.includes('index')) score += 3;
    if (specLower.includes('broker')) score += 2;
    if (specLower.includes('invest') || specLower.includes('portfolio')) score += 2;
    if (specLower.includes('data') || specLower.includes('analysis')) score += 1;
    
    return { spec, score };
  });

  // Sort by score and return the top one
  scoredSpecs.sort((a, b) => b.score - a.score);
  
  if (scoredSpecs.length > 0 && scoredSpecs[0].score > 0) {
    return scoredSpecs[0].spec;
  }

  // Fallback: return first specialization if no match found
  return author.specializations[0] || null;
}

/**
 * Get reviewer expertise description (usually about fact-checking or validation)
 */
export function getReviewerExpertise(reviewer: Author): string {
  // Check for specific review-related specializations
  const reviewSpecs = reviewer.specializations.filter(spec => 
    spec.toLowerCase().includes('validation') ||
    spec.toLowerCase().includes('fact') ||
    spec.toLowerCase().includes('methodology') ||
    spec.toLowerCase().includes('data')
  );
  
  if (reviewSpecs.length > 0) {
    // Create a concise description
    const spec = reviewSpecs[0];
    if (spec.includes('Data Validation')) {
      return 'Data validation';
    }
    if (spec.includes('Research Methodology')) {
      return 'Research methodology';
    }
    // Return the specialization without "expert" suffix - it will be added in the display
    return spec;
  }
  
  // Default fallback
  return 'Research & fact-checking';
}

