import React from "react";

const ProductPageDelivery = () => {
  return (
    <div className="  mb-4 px-2 mt-4">
      <p className="text-[14px] font-[380] leading-[23px]">
        Deivery Option Standarad
      </p>

      <label className=" mt-1.5 flex gap-2 py-[1px]  text-gray-500 text-[12px] font-[400] leading-[16px] cursor-pointer">
        <input
          type="checkbox"
          className="p-6 w-4 h-4  rounded-sm border border-gray-400 cursor-pointer"
        />
        <p>22</p>
      </label>
      <label className="flex gap-2 text-gray-500 py-[1px] text-[12px] font-[400] leading-[16px] cursor-pointer">
        <input
          type="checkbox"
          className="p-6 w-4 h-4  rounded-sm border border-gray-400 cursor-pointer"
        />
        <p>41</p>
      </label>
    </div>
  );
};

export default ProductPageDelivery;
