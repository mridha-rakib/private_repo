// src/components/layout/Topbar/Breadcrumb.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Map path segments to readable names
  const pathMap = {
    '': 'Dashboard',
    'users': 'Users',
    'view': 'View',
    'content-moderation': 'Content Moderation',
    'analytics': 'Analytics',
    'products': 'Products',
    'affiliated-data': 'Affiliated Data',
    'feedback': 'Feedback',
    'data-management': 'Data Management'
  };

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {/* <li>
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
        </li> */}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          
          return (
            <li key={to} className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {isLast ? (
                <span className="ml-2 text-sm font-medium text-gray-700">
                  {pathMap[value] || value}
                </span>
              ) : (
                <Link to={to} className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                  {pathMap[value] || value}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;