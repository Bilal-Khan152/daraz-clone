import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOldPrice } from "../utils/calculation";

const FlashSaleProducts = () => {
  const products = useSelector((state) => state.product.products);
  const searchTerm = useSelector((state) => state.search.term);
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const flashSale = filteredProducts.filter((item) => item.isFlashSale === true);
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap gap-3 mt-1 py-2 w-full ">
      {flashSale.map((product) => (
        <div
          key={product.id}
          onClick={() => navigate(`/productDetails/${product.id}`)}
          className="cursor-pointer border border-transparent hover:border-gray-200 rounded hover:shadow-[0_0_5px_rgba(0,0,0,0.25)] 
                 flex-1 min-w-[150px] max-w-[200px] mx-auto sm:mx-0 sm:min-w-[180px] sm:max-w-[220px]"
        >
          <img
            src={product.productImages[0]}
            className="w-full h-auto aspect-square object-cover"
            alt=""
          />
          <p className="mt-1 ms-1 text-[14px] text-[#212121] text-center lg:text-start font-[500] leading-[18px] tracking-normal">
            {product.title} Lorem ipsum dolor sit.
          </p>
          <p className="text-brand ms-1 mt-1 text-[18px] text-center lg:text-start font-normal leading-[22px]">
            RS.{product.price}
          </p>
          <p className="text-[12px] ms-1 text-center lg:text-start text-gray-500">
            <del className="text-[12px] font-normal leading-[20px] text-gray-400">
              RS.{getOldPrice(product.price , product.discount)}
            </del>
            <span className="ms-1 text-black">-{product.discount}%</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default FlashSaleProducts;
