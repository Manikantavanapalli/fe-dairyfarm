import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null; // No pagination needed if only one page

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5; // Number of page links to show at a time

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return pages;
  };

  return (
    <nav className="flex justify-center mt-10">
      <ul className="inline-flex items-center gap-2">
        {/* Previous Button */}
        <li>
          <button
            className={`px-4 py-2 rounded-lg ${currentPage === 1
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all`}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>

        {/* Page Numbers */}
        {getPageNumbers().map((page, index) =>
          typeof page === "number" ? (
            <li key={index}>
              <button
                className={`px-4 py-2 rounded-lg ${page === currentPage
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            </li>
          ) : (
            <li key={index} className="px-4 py-2">
              <span className="text-gray-500">{page}</span>
            </li>
          )
        )}

        {/* Next Button */}
        <li>
          <button
            className={`px-4 py-2 rounded-lg ${currentPage === totalPages
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all`}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;