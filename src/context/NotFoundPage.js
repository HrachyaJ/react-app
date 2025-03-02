import React from "react";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto px-4 py-16"> <br/>
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8 text-center">
        <div className="mb-6">
          <span className="material-symbols-outlined text-8xl text-gray-300">
            search_off
          </span>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-700 mb-6">Page Not Found</h2>
        
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p> <br/>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <a
            href="/"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Back to Home
          </a> <br/>
          <a
            href="/products"
            className="bg-gray-100 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Browse Products
          </a> <br/>
        </div>
        
        <div className="mt-10 border-t pt-6">
          <p className="text-gray-500 text-sm p-4">
            Need help? <a href="/support" className="text-blue-600 hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;