import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      {/* Illustration */}
      <div className="mb-6">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/404-page-not-found-8019076-6409771.png"
          alt="404 Not Found"
          className="w-64 md:w-80"
        />
      </div>

      {/* Error Message */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">The page you're looking for doesn't exist or has been moved.</p>

      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all"
      >
        🔙 Back to Home
      </button>
    </div>
  );
};

export default NotFound;
