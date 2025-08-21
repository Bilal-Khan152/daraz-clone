import React from "react";
import { Star } from "lucide-react";

const Rating = ({
  rating,
  reviewsCount,
  answersCount,
  className,
  emptyStarStyle,
  showRating
}) => {
  const rounded = Math.round(rating);
  const fullStars = rounded;
  const emptyStars = 5 - fullStars;
  return (
    <div className="flex items-center flex-wrap">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <Star key={`full-${i}`} className={className} />
        ))}

      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <Star key={`empty-${i}`} className={emptyStarStyle} />
        ))}

      {showRating && (
        <p className="ms-2 cursor-pointer hover:underline text-[12px] leading-[13px] font-[400] text-blue-600">
          Ratings {reviewsCount} {answersCount}
        </p>
      )}
    </div>
  );
};

export default Rating;
