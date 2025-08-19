import React from "react";

const ProductPageService = () => {
  return (
    <div className="px-2 mb-4 mt-4">
      <p className="text-[14px] font-[380] leading-[23px]">
        Service & Promotion
      </p>
      <label className="mt-2  flex gap-2 text-gray-500 py-[1px] text-[12px] font-[400] leading-[16px] cursor-pointer">
        <input type="checkbox" className="p-6 w-4 h-4  rounded-sm border border-gray-400 cursor-pointer" />
        <p>Men</p>
      </label>
      <label className="flex gap-2 text-gray-500 py-[1px] text-[12px] font-[400] leading-[16px] cursor-pointer">
        <input type="checkbox" className="p-6 w-4 h-4  rounded-sm border border-gray-400 cursor-pointer"/>
        <p>Men</p>
      </label>

      <label className="flex gap-2 text-gray-500 py-[1px] text-[12px] font-[400] leading-[16px] cursor-pointer">
        <input type="checkbox" className="p-6 w-4 h-4  rounded-sm border border-gray-400 cursor-pointer"/>
        <p>Buy More Save More</p>
      </label>

      <label className="flex gap-2 text-gray-500 py-[1px] text-[12px] font-[400] leading-[16px] cursor-pointer">
        <input type="checkbox" className="p-6 w-4 h-4  rounded-sm border border-gray-400 cursor-pointer" />
        <p>Coins</p>
      </label>

      <label className="flex gap-2 text-gray-500 py-[1px] text-[12px] font-[400] leading-[16px] cursor-pointer">
        <input type="checkbox" className="p-6 w-4 h-4  rounded-sm border border-gray-400 cursor-pointer"/>
        <p>8.8</p>
      </label>

      <label className="flex gap-2 text-gray-500 py-[1px] text-[12px] font-[400] leading-[16px] cursor-pointer">
        <input type="checkbox" className="p-6 w-4 h-4  rounded-sm border border-gray-400 cursor-pointer"/>
        <p>Free Delivery</p>
      </label>
    </div>
  );
};

export default ProductPageService;
