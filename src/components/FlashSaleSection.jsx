import React from "react";

import FlashSaleProducts from "../components/FlashSaleProducts";

const FlashSaleSection = () => {
  return (
    <>
      <div className="flex px-2 py-2 justify-between items-center">
        <div>
          <p className="relative left-3  text-brand top-[-8px] font-medium text-[14px] leading-[16.1px] tracking-normal">
            On Sale Now
          </p>
        </div>
        <div className="relative top-[-3px]">
          <button
            onClick={() => navigate("/product")}
            className="border-1 border-brand text-brand font-medium leading-[13.8px] text-[12px] md:text-[14px] px-1 py-1 md:px-[10px] md:py-[10px] rounded-[2px] cursor-pointer mr-[15px]"
          >
            SHOP ALL PRODUCTS
          </button>
        </div>
      </div>
      <hr className="mt-[-3px] text-gray-200" />
      <FlashSaleProducts />
    </>
  );
};

export default FlashSaleSection;
