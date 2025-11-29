import React from 'react';
import Link from 'next/link';
import ChecklistWrapper from '@/app/components/common/ChecklistWrapper';
import InteractiveCheckbox from '@/app/components/common/InteractiveCheckbox';
import ChecklistItemContent from '@/app/components/common/ChecklistItemContent';
import GlossarySection from '@/app/components/mdx/GlossarySection';
import { 
  setInGlossarySection, 
  isInGlossarySection, 
  hasGlossaryCTABeenInserted,
  markGlossaryCTAInserted,
  resetGlossaryState 
} from '@/app/components/mdx/glossaryState';
import {
  hasTocBeenInserted,
  markTocInserted,
  getTocItems,
  getCategory,
} from '@/app/components/mdx/tocState';
import GlossaryCTA from '@/app/components/blocks/GlossaryCTA';
import TableOfContents from '@/app/components/blocks/TableOfContents';
import { getCategoryColors, type CategoryColors } from '@/lib/category-colors';
import { getAllAuthors, type Author } from '@/lib/authors';

// Helper function to check if a list contains checkboxes (task list)
const isTaskList = (children: React.ReactNode): boolean => {
  if (!children) return false;
  
  const checkForCheckbox = (node: any): boolean => {
    if (!node) return false;
    
    // Check if it's a React element
    if (React.isValidElement(node)) {
      // Check if it's an input with type checkbox
      const element = node as React.ReactElement<any>;
      if (element.type === 'input' && element.props?.type === 'checkbox') {
        return true;
      }
      // Check if it's a string input element
      if (typeof element.type === 'string' && element.type === 'input' && element.props?.type === 'checkbox') {
        return true;
      }
      // Check children recursively
      if (element.props?.children) {
        const childrenArray = React.Children.toArray(element.props.children);
        return childrenArray.some(child => checkForCheckbox(child));
      }
    }
    
    // Handle arrays
    if (Array.isArray(node)) {
      return node.some(item => checkForCheckbox(item));
    }
    
    return false;
  };
  
  const childrenArray = React.Children.toArray(children);
  return childrenArray.some(child => checkForCheckbox(child));
};

export function createMdxComponents(category: string = 'Basics', author?: Author | null, reviewer?: Author | null) {
  const colors = getCategoryColors(category);
  
  // Helper function to find author by name
  const findAuthorByName = (name: string): Author | null => {
    const allAuthors = getAllAuthors();
    // Try exact match first
    let found = allAuthors.find(a => a.name.toLowerCase() === name.toLowerCase());
    if (found) return found;
    
    // Try partial match (first name or last name)
    const nameParts = name.split(' ').map(n => n.toLowerCase());
    found = allAuthors.find(a => {
      const authorParts = a.name.split(' ').map(n => n.toLowerCase());
      return nameParts.some(part => authorParts.includes(part));
    });
    return found || null;
  };
  
  // Helper to remove quotes from text (handles various quote types)
  const removeQuotes = (text: string): string => {
    if (!text || typeof text !== 'string') return text;
    let cleaned = text;
    
    // Pattern for all quote types (straight, curly, smart quotes, etc.)
    const quotePattern = /[""''„«»‚›‹»«\u201C\u201D\u2018\u2019\u2039\u203A]/g;
    
    // First, try to match if entire content is wrapped in matching quotes (with optional whitespace)
    // Match: whitespace + opening quote + content + closing quote + whitespace
    const wrappedMatch = cleaned.match(/^\s*(["''„«»‚›‹»«\u201C\u201D\u2018\u2019\u2039\u203A])(.+?)\1\s*$/);
    if (wrappedMatch) {
      cleaned = wrappedMatch[2];
    } else {
      // Remove leading quotes (all types)
      cleaned = cleaned.replace(/^[""''„«»‚›‹»«\u201C\u201D\u2018\u2019\u2039\u203A]+/g, '');
      // Remove trailing quotes
      cleaned = cleaned.replace(/[""''„«»‚›‹»«\u201C\u201D\u2018\u2019\u2039\u203A]+$/g, '');
    }
    
    return cleaned.trim();
  };

  // Helper to parse expert tip format: text + "— Author Name" at the end
  const parseExpertTip = (text: string): { tipText: string; authorName: string | null } => {
    // Match pattern: text followed by "— Author Name" (with em dash or regular dash) at the end
    // Look for pattern at the end: space + dash + space + Name (2+ words)
    const authorRegex = /\s+[—–-]\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)\s*$/;
    const authorMatch = text.match(authorRegex);
    
    if (authorMatch) {
      const authorName = authorMatch[1].trim();
      // Remove the author part from the end and clean quotes
      let tipText = text.substring(0, authorMatch.index).trim();
      tipText = removeQuotes(tipText);
      return { tipText, authorName };
    }
    
    // Legacy format: "Expert tip from [Author Name]: text"
    const legacyRegex = /Expert tip from ([^:]+):\s*(.+)/;
    const legacyMatch = text.match(legacyRegex);
    
    if (legacyMatch) {
      const authorName = legacyMatch[1].trim();
      let tipText = legacyMatch[2].trim();
      tipText = removeQuotes(tipText);
      return { tipText, authorName };
    }
    
    return { tipText: removeQuotes(text), authorName: null };
  };
  
  // Helper to extract text from React node
  const extractText = (node: any): string => {
    if (typeof node === 'string') return node;
    if (React.isValidElement(node)) {
      const element = node as React.ReactElement<any>;
      if (element.props?.children) {
        return React.Children.toArray(element.props.children).map(extractText).join('');
      }
    }
    if (Array.isArray(node)) {
      return node.map(extractText).join('');
    }
    return '';
  };

  // Helper to generate ID from text (same as in toc-parser)
  const generateIdFromText = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim();
  };

  // Helper to check if h2 is a glossary heading
  const isGlossaryHeading = (children: React.ReactNode): boolean => {
    const text = React.Children.toArray(children).map(extractText).join('').toLowerCase();
    return text.includes('glossary') || text.includes('terms and abbreviations');
  };

  // Reset glossary state at the start
  resetGlossaryState();

  return {
  h2: (props: any) => {
    const isGlossary = isGlossaryHeading(props.children);
    const headingText = React.Children.toArray(props.children).map(extractText).join('').trim();
    const headingId = generateIdFromText(headingText);
    
    // Insert TOC before the first non-glossary H2 (which comes after TL;DR and Key Facts)
    if (!isGlossary && !hasTocBeenInserted()) {
      const tocItems = getTocItems();
      markTocInserted();
      
      // If this is a new h2 and we were in glossary, show CTA before this h2
      if (isInGlossarySection() && !hasGlossaryCTABeenInserted()) {
        markGlossaryCTAInserted();
        setInGlossarySection(false);
        return (
          <>
            {tocItems.length > 0 && <TableOfContents items={tocItems} category={getCategory()} />}
            <GlossaryCTA />
            <h2 id={headingId} className={`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-16 mb-8 border-b ${colors.border} pb-4`} {...props} />
          </>
        );
      }
      
      return (
        <>
          {tocItems.length > 0 && <TableOfContents items={tocItems} category={getCategory()} />}
          <h2 id={headingId} className={`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-16 mb-8 border-b ${colors.border} pb-4`} {...props} />
        </>
      );
    }
    
    // If this is a new h2 and we were in glossary, show CTA before this h2
    if (!isGlossary && isInGlossarySection() && !hasGlossaryCTABeenInserted()) {
      markGlossaryCTAInserted();
      setInGlossarySection(false);
      return (
        <>
          <GlossaryCTA />
          <h2 id={headingId} className={`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-16 mb-8 border-b ${colors.border} pb-4`} {...props} />
        </>
      );
    }
    
    if (isGlossary) {
      setInGlossarySection(true);
      return (
        <GlossarySection>
          <h2 className={`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-16 mb-8 border-b ${colors.border} pb-4`} {...props} />
        </GlossarySection>
      );
    }
    
    return (
      <h2 id={headingId} className={`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-16 mb-8 border-b ${colors.border} pb-4`} {...props} />
    );
  },
  h3: (props: any) => {
    const headingText = React.Children.toArray(props.children).map(extractText).join('').trim();
    const headingId = generateIdFromText(headingText);
    return (
      <h3 id={headingId} className="text-2xl font-bold tracking-tight text-gray-900 mt-10 mb-4" {...props} />
    );
  },
  h4: (props: any) => {
    const headingText = React.Children.toArray(props.children).map(extractText).join('').trim();
    const headingId = generateIdFromText(headingText);
    return (
      <h4 id={headingId} className="text-xl font-semibold tracking-tight text-gray-900 mt-8 mb-3" {...props} />
    );
  },
  p: (props: any) => (
    <p className="text-lg leading-8 text-gray-600 mb-4" {...props} />
  ),
  ul: (props: any) => {
    // Check if this is a task list by checking className or children
    const className = props.className || '';
    const hasTaskListClass = className.includes('contains-task-list') || className.includes('task-list');
    const isChecklist = hasTaskListClass || isTaskList(props.children);
    
    // Always wrap task lists in styled container
    if (isChecklist || hasTaskListClass) {
      const finalClassName = `space-y-3 list-none pl-0 contains-task-list checklist-container ${className}`;
      return (
        <ChecklistWrapper>
          <div className={`my-8 rounded-xl border-2 ${colors.border} bg-gradient-to-br ${colors.fromGradient} ${colors.viaGradient} ${colors.toGradient} p-6 shadow-lg relative overflow-hidden`}>
            <div className={`absolute top-0 right-0 w-32 h-32 ${colors.bgAccent} rounded-full -mr-16 -mt-16 blur-2xl`}></div>
            <div className={`absolute bottom-0 left-0 w-24 h-24 ${colors.bgAccent} rounded-full -ml-12 -mb-12 blur-xl`}></div>
            <ul className={finalClassName} {...props} />
          </div>
        </ChecklistWrapper>
      );
    }
    
    return (
      <ul className="list-disc space-y-2 pl-6 mb-4" {...props} />
    );
  },
  ol: (props: any) => (
    <ol className="list-decimal space-y-2 pl-6 mb-4" {...props} />
  ),
  li: (props: any) => {
    const children = React.Children.toArray(props.children);
    
    // Helper to check if an element is a checkbox
    const isCheckbox = (child: any) => {
      if (!React.isValidElement(child)) return false;
      const element = child as React.ReactElement<any>;
      return (element.type === 'input' && element.props?.type === 'checkbox') ||
             (typeof element.type === 'string' && element.type === 'input' && element.props?.type === 'checkbox') ||
             (element.props?.type === 'checkbox');
    };

    let checkbox: any = null;
    let content: any[] = [];
    
    // 1. Check if direct child is checkbox
    const checkboxIndex = children.findIndex(child => isCheckbox(child));
    
    if (checkboxIndex !== -1) {
      checkbox = children[checkboxIndex];
      content = children.filter((_, i) => i !== checkboxIndex);
    } else {
      // 2. Check if any child is a P/div wrapper that contains the checkbox
      // MDX often adds whitespace strings, so the wrapper might not be at index 0
      const wrapperIndex = children.findIndex(child => 
        React.isValidElement(child) && 
        (child.type === 'p' || (typeof child.type === 'function' && child.type.name === 'p') || child.type === 'div')
      );

      if (wrapperIndex !== -1) {
        const wrapper = children[wrapperIndex];
        
        if (React.isValidElement(wrapper)) {
           const wrapperElement = wrapper as React.ReactElement<any>;
           if (wrapperElement.props && wrapperElement.props.children) {
             const wrapperChildren = React.Children.toArray(wrapperElement.props.children);
             const wrapperCheckboxIndex = wrapperChildren.findIndex(child => isCheckbox(child));
             
             if (wrapperCheckboxIndex !== -1) {
               checkbox = wrapperChildren[wrapperCheckboxIndex];
               // Unwrap the wrapper content minus checkbox
               const wrapperRest = wrapperChildren.filter((_, i) => i !== wrapperCheckboxIndex);
               
               // Replace the wrapper in the original children array with the unwrapped content
               content = [
                 ...children.slice(0, wrapperIndex),
                 ...wrapperRest,
                 ...children.slice(wrapperIndex + 1)
               ];
             }
           }
        }
      }
    }

    // Fallback: if we suspect it's a task item but didn't find checkbox in typical places
    // Sometimes the input is buried deeper?
    const hasTaskItemClass = props.className?.includes('task-list-item') || props.className?.includes('task-list');

    if (checkbox || hasTaskItemClass) {
      // If we have the class but didn't find checkbox (maybe weird structure), try to find it one more time strictly?
      // If hasTaskItemClass is true but checkbox is null, it might be hidden deeper?
      // For now, rely on finding the checkbox. If hasTaskItemClass is present, we assume it's a task item.
      // But if we can't find the checkbox component, we can't render the InteractiveCheckbox properly unless we fake it.
      // Let's assume if hasTaskItemClass is set, there IS a checkbox.
      
      // Generate unique ID for checkbox based on text content
      const extractTextForId = (node: any): string => {
        if (typeof node === 'string') return node;
        if (React.isValidElement(node)) {
          const element = node as React.ReactElement<any>;
          if (element.props?.children) {
            return React.Children.toArray(element.props.children).map(extractTextForId).join('');
          }
        }
        if (Array.isArray(node)) {
          return node.map(extractTextForId).join('');
        }
        return '';
      };
      
      const textString = extractTextForId(content).slice(0, 50).replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
      // Use a stable ID if possible, or random if needed (though hydration mismatch risk)
      // Using content hash/slug is better.
      const checkboxId = `checklist-${textString || 'item'}`.replace(/-+/g, '-').replace(/^-|-$/g, '');
      
      const defaultChecked = checkbox && React.isValidElement(checkbox) ? ((checkbox as React.ReactElement<any>).props?.checked || false) : false;

      return (
        <li className={`flex items-start gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm border ${colors.border} ${colors.hoverBorder} ${colors.hoverBg} hover:shadow-md transition-all duration-200 group task-list-item checklist-item my-2`}>
          {/* Checkbox - separated and top-aligned */}
          <div className="flex-shrink-0 mt-0.5">
            <InteractiveCheckbox
              id={checkboxId}
              defaultChecked={defaultChecked}
              className={`w-5 h-5 rounded border-2 ${colors.borderAccent} ${colors.textAccent} focus:${colors.ring} focus:ring-offset-0 cursor-pointer transition-all duration-200`}
            />
          </div>
          
          {/* Text content - split header/description */}
          <div className="flex-1 min-w-0">
            <ChecklistItemContent>
              {content}
            </ChecklistItemContent>
          </div>
        </li>
      );
    }
    
    return (
      <li className="text-lg leading-8 text-gray-600 pl-2 mb-2" {...props} />
    );
  },
  input: (props: any) => {
    // For checkboxes in checklist items, they're already handled in li component
    // Just return regular input - it will be replaced by InteractiveCheckbox in li
    if (props.type === 'checkbox') {
      return <input {...props} type="checkbox" />;
    }
    return <input {...props} />;
  },
  blockquote: (props: any) => {
    // Check if it's an expert tip (contains "Expert tip" or author attribution with em dash)
    const children = React.Children.toArray(props.children);
    // Handle both single blockquote and nested blockquotes (from MDX multi-line blockquotes)
    const extractText = (node: any): string => {
      if (typeof node === 'string') return node;
      if (React.isValidElement(node)) {
        const element = node as React.ReactElement<any>;
        // Handle <p> tags and other wrappers
        if (element.props?.children) {
          return React.Children.toArray(element.props.children).map(extractText).join('');
        }
        // If it's a text node wrapped in React element
        if (element.props?.children === undefined && typeof element.props?.children !== 'object') {
          return String(element.props?.children || '');
        }
      }
      if (Array.isArray(node)) {
        return node.map(extractText).join(' ');
      }
      return '';
    };
    // Extract text preserving spaces but normalizing whitespace
    const text = children.map(extractText).join(' ').replace(/\s+/g, ' ').trim();
    const isExpertTip = text.includes('Expert tip') || 
                       text.includes('Expert Tip') || 
                       /[—–-]\s+[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+/.test(text); // Pattern: — Author Name (2+ words)
    
    if (isExpertTip) {
      const { tipText, authorName } = parseExpertTip(text);
      const author = authorName ? findAuthorByName(authorName) : null;
      
      return (
        <div className="my-8">
          <blockquote 
            className={`relative ${colors.bg} rounded-2xl shadow-lg border ${colors.border} p-6 sm:p-8 overflow-hidden [&_p]:before:!content-none [&_p]:after:!content-none`}
          >
            {/* Large quote icon in corner */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
              <svg 
                className={`h-16 w-16 sm:h-20 sm:w-20 ${colors.textAccent} opacity-10`} 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Show original text without author attribution and without quotes */}
              <div className={`text-base sm:text-lg leading-7 sm:leading-8 ${colors.text} mb-6 pr-8 italic`}>
                {(() => {
                  // Always render original props.children, but remove quotes and author attribution
                  const childrenArray = React.Children.toArray(props.children);
                  
                  // Helper to check if element is a <p> tag
                  const isPElement = (element: any): boolean => {
                    if (!React.isValidElement(element)) return false;
                    const type = element.type;
                    return type === 'p' || (typeof type === 'string' && type === 'p');
                  };
                  
                  // Check if any child is already a <p> tag
                  const hasPElement = childrenArray.some((child: any) => isPElement(child));
                  
                  // Recursive function to process and clean children deeply
                  const processChildrenRecursively = (children: any): any => {
                    if (typeof children === 'string') {
                      // Remove author signature from end, then remove surrounding quotes
                      let cleaned = children.replace(/\s+[—–-]\s+[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+\s*$/g, '');
                      cleaned = removeQuotes(cleaned);
                      return cleaned;
                    }
                    
                    if (React.isValidElement(children)) {
                      const element = children as React.ReactElement<any>;
                      // Process all children recursively
                      if (element.props && element.props.children !== undefined) {
                        const processed = React.Children.map(element.props.children, (nested: any) => {
                          return processChildrenRecursively(nested);
                        });
                        return React.cloneElement(element, { children: processed });
                      }
                      return element;
                    }
                    
                    if (Array.isArray(children)) {
                      return children.map(processChildrenRecursively);
                    }
                    
                    return children;
                  };
                  
                  // Process children to remove quotes and author signature
                  const processedChildren = childrenArray
                    .filter((child: any) => {
                      // Filter out standalone quote characters
                      if (typeof child === 'string') {
                        const trimmed = child.trim();
                        // Remove standalone quote-only strings
                        return !/^[""''„«»‚›‹»«\u201C\u201D\u2018\u2019\u2039\u203A]$/.test(trimmed);
                      }
                      return true;
                    })
                    .map((child: any) => {
                      // Process recursively to handle all nested structures
                      return processChildrenRecursively(child);
                    });
                  
                  // Final cleanup: remove quotes from first and last text nodes
                  // This ensures quotes at the very beginning and end of the entire content are removed
                  if (processedChildren.length > 0) {
                    // Simple cleanup for string elements at boundaries
                    if (typeof processedChildren[0] === 'string' && processedChildren[0].trim().length > 0) {
                      processedChildren[0] = removeQuotes(processedChildren[0]);
                    }
                    if (processedChildren.length > 1 && typeof processedChildren[processedChildren.length - 1] === 'string' && processedChildren[processedChildren.length - 1].trim().length > 0) {
                      processedChildren[processedChildren.length - 1] = removeQuotes(processedChildren[processedChildren.length - 1]);
                    }
                  }
                  
                  // Never wrap in <p> - either children already have <p> tags, or we use Fragment
                  // This avoids nested <p> tags which cause hydration errors
                  return <>{processedChildren}</>;
                })()}
              </div>
              
              {/* Author attribution - only show if author was found */}
              {(author || authorName) && (
                <div className={`flex items-center gap-3 pt-4 border-t ${colors.border}`}>
                  {author && (
                    <>
                      {/* Author avatar */}
                      <div className="flex-shrink-0">
                        {author.image ? (
                          <Link href={`/authors/${author.slug}`}>
                            <img
                              src={author.image}
                              alt={author.name}
                              className={`h-10 w-10 rounded-full object-cover border-2 ${colors.border}`}
                            />
                          </Link>
                        ) : (
                          <Link href={`/authors/${author.slug}`} className="no-underline">
                            <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${colors.fromGradient} ${colors.toGradient} flex items-center justify-center border-2 ${colors.border}`}>
                              <span className={`text-sm font-semibold ${colors.textAccent}`}>
                                {author.name
                                  .split(' ')
                                  .map((n) => n[0])
                                  .join('')
                                  .toUpperCase()}
                              </span>
                            </div>
                          </Link>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link 
                          href={`/authors/${author.slug}`}
                          className={`block text-sm font-semibold ${colors.text} ${colors.linkHover} transition-colors underline`}
                        >
                          {author.name}
                        </Link>
                        {author.role && (
                          <p className={`text-xs ${colors.textAccent} mt-0.5 opacity-80`}>{removeQuotes(author.role)}</p>
                        )}
                      </div>
                    </>
                  )}
                  {authorName && !author && (
                    <div className="flex-1">
                      <p className={`text-sm font-semibold ${colors.text}`}>{authorName}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </blockquote>
        </div>
      );
    }
    
    // Regular blockquote with category colors
    return (
      <blockquote 
        className={`!border-l-4 ${colors.borderAccent} ${colors.bg} pl-6 py-4 my-6 italic text-gray-700 rounded-r-lg [&_p]:before:!content-none [&_p]:after:!content-none`}
        style={{ borderLeftColor: colors.borderAccentColor }}
        {...props} 
      />
    );
  },
  table: (props: any) => (
    <div className="my-8 -mx-4 sm:mx-0">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className={`overflow-hidden shadow-sm ring-1 ${colors.ring} ring-opacity-20 md:rounded-lg`}>
            <table className={`min-w-full divide-y ${colors.divide}`} {...props} />
          </div>
        </div>
      </div>
    </div>
  ),
  thead: (props: any) => (
    <thead className={colors.bg} {...props} />
  ),
  tbody: (props: any) => (
    <tbody className={`divide-y ${colors.divide} bg-white`} {...props} />
  ),
  tr: (props: any) => (
    <tr className={`${colors.hoverBg} transition-colors`} {...props} />
  ),
  th: (props: any) => (
    <th className="px-3 py-3 sm:px-4 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider" {...props} />
  ),
  td: (props: any) => (
    <td className="px-3 py-3 sm:px-4 text-sm text-gray-700 align-top" style={{ wordBreak: 'break-word' }} {...props} />
  ),
  strong: (props: any) => (
    <strong className="font-semibold text-gray-900" {...props} />
  ),
  a: (props: any) => (
    <a className={`${colors.linkColor} ${colors.linkHover} underline font-medium`} target="_blank" rel="noopener noreferrer" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800" {...props} />
  ),
  hr: (props: any) => {
    // If we're in glossary and CTA hasn't been inserted, show it before hr
    if (isInGlossarySection() && !hasGlossaryCTABeenInserted()) {
      markGlossaryCTAInserted();
      setInGlossarySection(false);
      return (
        <>
          <GlossaryCTA />
          <hr className={`my-8 ${colors.border}`} {...props} />
        </>
      );
    }
    return <hr className={`my-8 ${colors.border}`} {...props} />;
  },
  };
}

// Default export for backward compatibility
export const mdxComponents = createMdxComponents('Basics');



