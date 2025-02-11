import React from "react";

interface LoadingSpinnerProps {
  size?: string; // Accepts Tailwind size classes (e.g., "w-16 h-16")
  color?: string; // Accepts Tailwind color classes (e.g., "border-red-500")
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "w-12 h-12",
  color = "border-blue-500",
}) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={`${size} border-4 ${color} border-dashed rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
