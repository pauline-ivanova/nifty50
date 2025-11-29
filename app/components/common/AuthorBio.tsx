import Link from 'next/link';
import { getAuthorBySlug, type Author } from '@/lib/authors';
import { ClockIcon, UserIcon } from '@heroicons/react/24/outline';

interface AuthorBioProps {
  authorSlug?: string;
  author?: Author;
  datePublished?: string;
  dateModified?: string;
  showReviewer?: boolean;
  reviewerSlug?: string;
  compact?: boolean;
  atTop?: boolean;
}

export default function AuthorBio({
  authorSlug,
  author: authorProp,
  datePublished,
  dateModified,
  showReviewer = false,
  reviewerSlug,
  compact = false,
  atTop = false,
}: AuthorBioProps) {
  // Get author data
  const author = authorProp || (authorSlug ? getAuthorBySlug(authorSlug) : null);
  const reviewer = reviewerSlug ? getAuthorBySlug(reviewerSlug) : null;

  if (!author) {
    // Fallback to default editorial team
    return (
      <div className={`${atTop ? '' : 'border-t border-gray-200 dark:border-gray-700'} pt-6 ${atTop ? 'mb-8' : 'mt-8'}`}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
              <UserIcon className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Our Editorial Research Team
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Our team of financial analysts and researchers ensures all content is accurate, up-to-date, and based on verified data from official sources.
            </p>
            {(datePublished || dateModified) && (
              <div className="flex items-center gap-4 mt-3 text-xs text-gray-500 dark:text-gray-400">
                {datePublished && (
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    <span>Published: {new Date(datePublished).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                )}
                {dateModified && dateModified !== datePublished && (
                  <div className="flex items-center gap-1">
                    <span>Updated: {new Date(dateModified).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (compact) {
    return (
      <div className="flex items-center gap-3 text-sm">
        <Link
          href={`/authors/${author.slug}`}
          className="font-semibold text-brand-saffron dark:text-brand-saffron hover:text-brand-saffron-hover dark:hover:text-brand-saffron-hover"
        >
          {author.name}
        </Link>
        {dateModified && (
          <span className="text-gray-500 dark:text-gray-400">
            • Updated {new Date(dateModified).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`${atTop ? '' : 'border-t border-gray-200 dark:border-gray-700'} pt-6 ${atTop ? 'mb-8' : 'mt-8'}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          {author.image ? (
            <Link href={`/authors/${author.slug}`}>
              <img
                src={author.image}
                alt={author.name}
                className="h-16 w-16 rounded-full object-cover"
              />
            </Link>
          ) : (
            <Link href={`/authors/${author.slug}`}>
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                <span className="text-xl font-semibold text-white">
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
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <Link
                href={`/authors/${author.slug}`}
                className="text-lg font-semibold text-gray-900 dark:text-white hover:text-brand-saffron dark:hover:text-brand-saffron"
              >
                {author.name}
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {author.role}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {author.shortBio}
              </p>
            </div>
          </div>

          {/* Date information */}
          {(datePublished || dateModified) && (
            <div className="flex items-center gap-4 mt-4 text-xs text-gray-500 dark:text-gray-400">
              {datePublished && (
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-4 w-4" />
                  <span>Published: {new Date(datePublished).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
              )}
              {dateModified && dateModified !== datePublished && (
                <div className="flex items-center gap-1">
                  <span>Updated: {new Date(dateModified).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
              )}
            </div>
          )}

          {/* Reviewer information */}
          {showReviewer && reviewer && (
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Reviewed by:</p>
              <Link
                href={`/authors/${reviewer.slug}`}
                className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-brand-saffron dark:hover:text-brand-saffron"
              >
                {reviewer.name}
              </Link>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {reviewer.role}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

