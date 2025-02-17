import React, { useState } from "react";
import { Star } from "lucide-react";

interface RatingProps {
  rating: number; // Current rating value (1-5)
  onRate?: (rating: number) => void; // Callback when rating changes
  readOnly?: boolean; // Read-only mode (default: false)
}

const Rating: React.FC<RatingProps> = ({ rating, onRate, readOnly = false }) => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  // Handle Click (Set Rating)
  const handleClick = (value: number) => {
    if (!readOnly && onRate) {
      onRate(value);
    }
  };

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-7 h-7 cursor-pointer transition-all ${
            (hoveredRating || rating) >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
          onClick={() => handleClick(star)}
          onMouseEnter={() => !readOnly && setHoveredRating(star)}
          onMouseLeave={() => !readOnly && setHoveredRating(null)}
        />
      ))}
      <span className="text-lg font-medium text-gray-700 ml-2">{rating.toFixed(1)}</span>
    </div>
  );
};

export default Rating;
