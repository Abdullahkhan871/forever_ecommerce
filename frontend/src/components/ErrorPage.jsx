import React from "react";
import { useNavigate } from "react-router-dom"; // If using React Router

const ErrorPage = () => {
  const navigate = useNavigate(); // Remove if not using React Router

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default ErrorPage;
