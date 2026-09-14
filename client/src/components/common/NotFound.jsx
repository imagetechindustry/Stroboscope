import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ title = "Page Not Found", message = "The page you're looking for doesn't exist." }) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{title}</h1>
      <p className="text-lg text-gray-500 mb-8 max-w-md">{message}</p>
      <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
