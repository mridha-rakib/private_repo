import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import React, { useState } from "react";
import { feedback } from "../../constants/feedback";
import {Pagination} from "../../components/pagination/Pagination";

function Feedback() {
  const feedbacks=feedback
  const [currentPage, setCurrentPage] = useState(1);
  const feedbacksPerPage = 6;
  const totalPages = Math.ceil(feedbacks.length / feedbacksPerPage);
  const paginatedFeedbacks = feedbacks.slice(
    (currentPage - 1) * feedbacksPerPage,
    currentPage * feedbacksPerPage
  );


  // Helper function to render pagination with ellipsis
  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              currentPage === i
                ? "bg-purple-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      // Show ellipsis for large page counts
      const showEllipsisStart = currentPage > 3;
      const showEllipsisEnd = currentPage < totalPages - 2;
      
      // Always show first page
      buttons.push(
        <button
          key={1}
          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
            currentPage === 1
              ? "bg-purple-600 text-white shadow-md"
              : "text-gray-600 hover:bg-gray-100 border border-gray-200"
          }`}
          onClick={() => setCurrentPage(1)}
        >
          1
        </button>
      );
      
      if (showEllipsisStart) {
        buttons.push(
          <span key="ellipsis-start" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-400">
            <MoreHorizontal className="w-4 h-4" />
          </span>
        );
      }
      
      // Show current page and adjacent pages
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        buttons.push(
          <button
            key={i}
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              currentPage === i
                ? "bg-purple-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </button>
        );
      }
      
      if (showEllipsisEnd) {
        buttons.push(
          <span key="ellipsis-end" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-400">
            <MoreHorizontal className="w-4 h-4" />
          </span>
        );
      }
      
      // Always show last page
      if (totalPages > 1) {
        buttons.push(
          <button
            key={totalPages}
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              currentPage === totalPages
                ? "bg-purple-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
            onClick={() => setCurrentPage(totalPages)}
          >
            {totalPages}
          </button>
        );
      }
    }
    
    return buttons;
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Feedback Cards */}
      <div className="space-y-3 sm:space-y-4">
        {paginatedFeedbacks.map((feedback, index) => (
          <div 
            key={feedback.id} 
            className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-all duration-200 hover:border-gray-300"
          >
            {/* User Info Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                    {feedback.name}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">
                  {feedback.email}
                </p>
              </div>
              
              {/* Rating and Date */}
              <div className="flex flex-col sm:items-end gap-1 sm:gap-2">
                
                <span className="text-xs text-gray-500">
                  {new Date(feedback.date).toLocaleDateString()}
                </span>
              </div>
            </div>
            
            {/* Feedback Content */}
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                "{feedback.feedback}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Pagination */}
     
        
        {/* Pagination Controls */}
        <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        PerPage={feedbacksPerPage}
        totalItems={feedbacks.length}
        />
      
    </div>
  );
}

export default Feedback;
