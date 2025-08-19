import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const CategoriesSection = () => {
  const products = useSelector((state) => state.product.products);
  const searchTerm = useSelector((state) => state.search.term);
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const categories = filteredProducts.filter(
    (item) => item.Categories === true
  );

  const navigate = useNavigate();

  return (
    <div className="mt-1 bg-white mx-auto w-[95%] md:w-[90%] lg:w-[79%] h-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        {[...categories, ...categories].map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            onClick={() => navigate(`/product`)}
            className="cursor-pointer border border-gray-200 border-l-gray-50   hover:shadow-[0_0_5px_rgba(0,0,0,0.25)] transition-shadow duration-200 p-2"
          >
            <img
              src={product.imageURL}
              className="w-full h-[100px] sm:h-[110px] md:h-[90px] object-contain mx-auto"
              alt=""
            />
            <p className="mt-2 font-[500] text-[14px] text-[#212121] leading-[18px] text-center">
              {product.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
