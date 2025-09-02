// src/components/layout/Sidebar/SidebarItem.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SidebarItems = ({ item, isActive }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleItemClick = () => {
    if (item.hasView) {
      setIsExpanded(!isExpanded);
    } else if (item.path) {
      navigate(item.path);
    }
  };

  const handleViewClick = (e, viewPath) => {
    e.stopPropagation();
    navigate(viewPath);
  };

  return (
    <div className="mb-1">
      <div
        className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
          isActive
            ? 'bg-blue-100 text-blue-700 font-medium'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
        onClick={handleItemClick}
      >
        <div className="flex items-center">
          <span className="mr-3">{item.icon}</span>
          <span className="text-sm">{item.name}</span>
        </div>
        {item.hasView && (
          <span>
            {isExpanded ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </span>
        )}
      </div>
      
      {item.hasView && isExpanded && (
        <div className="ml-6 mt-1">
          <div
            className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${
              location.pathname === item.viewPath
                ? 'bg-blue-50 text-blue-600 font-medium'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={(e) => handleViewClick(e, item.viewPath)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="text-sm">View {item.name}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarItems;