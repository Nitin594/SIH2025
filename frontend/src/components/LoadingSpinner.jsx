// LoadingSpinner.js
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-32 w-32 border-8 border-gray-200 border-t-indigo-600 mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse rounded-full h-16 w-16 bg-indigo-100"></div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Alumni Platform</h2>
          <p className="text-gray-600 animate-pulse">Loading your experience...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;