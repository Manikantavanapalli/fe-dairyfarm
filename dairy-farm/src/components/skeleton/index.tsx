import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <div>
      <div className="bg-gray-200 p-4 shadow-md w-full h-96 flex items-center"> {/* Flex and centering */}
        <div className="bg-gray-300 animate-pulse w-1/2 h-full rounded-md" /> {/* Left half for the image */}
        <div className="flex flex-col space-y-4 p-8 w-1/2"> {/* Adjust padding to match the text area */}
          <div className="bg-gray-300 animate-pulse w-3/4 h-12 rounded" /> {/* Title placeholder */}
          <div className="bg-gray-300 animate-pulse w-full h-8 rounded" /> {/* Subtitle placeholder */}
          <div className="bg-gray-300 animate-pulse w-5/6 h-6 rounded" /> {/* Additional info placeholder */}
          <div className="bg-gray-300 animate-pulse w-1/3 h-10 mt-4 rounded-lg" /> {/* Button placeholder */}
        </div>

      </div>

      <div className="w-80">
        <div className={`bg-gray-300 animate-pulse w-full h-8 mb-2`} />
      </div>

      <div className="bg-gray-200 p-6 shadow-md w-80"> {/* Increased width to 80 (20rem) */}
        <div className="bg-gray-300 animate-pulse w-32 h-8 mb-4" /> {/* Larger heading skeleton */}
        <div className="bg-gray-300 animate-pulse w-full h-56 mb-6" /> {/* Larger image skeleton */}
        <div className="bg-gray-300 animate-pulse w-full h-12 mb-4" /> {/* Larger content skeleton */}
        <div className="bg-gray-300 animate-pulse w-full h-8 mb-2" /> {/* Smaller content skeleton */}
      </div>
    </div>

  );
};

export default Skeleton;
