import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ForYouSection = () => {
  const products = useSelector((state) => state.product.products);
  const searchTerm = useSelector((state) => state.search.term);
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const forYou = filteredProducts.filter((item) => item.isForYou === true);
  const navigate = useNavigate();

  return (
    <div className="mt-1 rounded mx-auto w-[79%] h-auto  gap-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 ">
        {forYou.slice(0, 41).map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/productDetails/${product.id}`)}
            className="cursor-pointer bg-white   border-gray-200 rounded hover:shadow-[0_0_5px_rgba(0,0,0,0.25)] flex flex-col"
          >
            <img
              src={product.productImages[0]}
              className="w-[200px] h-[200px] object-cover mx-auto"
              alt=""
            />
            <div className="flex flex-col justify-between flex-grow p-2 min-h-[70px]">
              <p className="text-[#290000] text-[14px]  text-center lg:text-start font-[400] leading-[17px] line-clamp-2">
                {product.title} Lorem ipsum dolor sit.
              </p>
              <p className="text-brand text-[18px] text-center lg:text-start font-[400] leading-[30px]">
                RS.{product.price}{" "}
                <span className="text-[12px] font-[400] text-gray-600">
                  -22%
                </span>
              </p>
              <div className="text-brand text-[18px] font-normal flex items-center gap-1 justify-center lg:justify-start">
                <div className="flex gap-[1px]">
                  <FaStar size={11} className="text-[#FACA51]" />
                  <FaStar size={11} className="text-[#FACA51]" />
                  <FaStar size={11} className="text-[#FACA51]" />
                  <FaStar size={11} className="text-[#FACA51]" />
                  <FaStar size={11} className="text-[#FACA51]" />
                </div>
                <span className="text-gray-400 text-[12px] font-[400]">
                  (535)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForYouSection;
