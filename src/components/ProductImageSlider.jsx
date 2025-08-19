import { useState } from "react";

export default function ProductImageSlider({ product }) {
  const [startIndex, setStartIndex] = useState(0);
  const images = product.productImages || [];
  const visibleCount = 3;

  if (images.length === 0) return null;

  const visibleImages = images.slice(startIndex, startIndex + visibleCount);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + visibleCount < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="flex items-center space-x-8">
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className="p-2 text-gray-500 disabled:opacity-30 hover:text-black"
      >
        &#10094;
      </button>

      <div className="flex space-x-1">
        {visibleImages.map((img, idx) => (
          <div
            key={idx}
            className="border rounded-sm cursor-pointer border-gray-300 hover:border-orange-500"
          >
            <img
              src={img}
              alt={`Product ${idx}`}
              className="w-12 h-12 object-contain"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={startIndex + visibleCount >= images.length}
        className="p-2 text-gray-500 disabled:opacity-30 hover:text-black"
      >
        &#10095;
      </button>
    </div>
  );
}
