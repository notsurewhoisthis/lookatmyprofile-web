import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string; // e.g., '/blog'
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => {
    if (page === 1) return baseUrl;
    return `${baseUrl}/page/${page}`;
  };

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showMax = 7; // Maximum number of page buttons to show

    if (totalPages <= showMax) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push('...');
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav
      className="flex justify-center items-center gap-2 mt-12"
      aria-label="Blog pagination"
    >
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-purple-800 transition-colors"
          aria-label="Previous page"
        >
          ← Previous
        </Link>
      ) : (
        <span className="px-4 py-2 bg-gray-900 text-gray-600 rounded-lg cursor-not-allowed">
          ← Previous
        </span>
      )}

      {/* Page Numbers */}
      <div className="flex gap-2">
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-4 py-2 text-gray-500"
              >
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <Link
              key={pageNum}
              href={getPageUrl(pageNum)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                isActive
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-purple-800 hover:text-white'
              }`}
              aria-label={`Page ${pageNum}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {pageNum}
            </Link>
          );
        })}
      </div>

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-purple-800 transition-colors"
          aria-label="Next page"
        >
          Next →
        </Link>
      ) : (
        <span className="px-4 py-2 bg-gray-900 text-gray-600 rounded-lg cursor-not-allowed">
          Next →
        </span>
      )}
    </nav>
  );
}

interface PaginationMetaProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

// SEO meta tags for pagination (use in page head)
export function PaginationMeta({ currentPage, totalPages, baseUrl }: PaginationMetaProps) {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  const getPageUrl = (page: number | null) => {
    if (!page) return null;
    if (page === 1) return `https://www.lookatmyprofile.org${baseUrl}`;
    return `https://www.lookatmyprofile.org${baseUrl}/page/${page}`;
  };

  return (
    <>
      {prevPage && (
        <link rel="prev" href={getPageUrl(prevPage)!} />
      )}
      {nextPage && (
        <link rel="next" href={getPageUrl(nextPage)!} />
      )}
    </>
  );
}
