import React from "react";
import { allProductPagecategories, viewLess } from "../Data/index";

const ProductPageCategories = () => {
  return (
    <div className="px-2 mb-4">
      <p className="text-[13px] font-[400] text-gray-900 leading-[25px]">
        Category
      </p>

      {allProductPagecategories.map((item, idx) => (
        <p
          key={idx}
          className={`text-[12px] leading-[25px] cursor-pointer transition duration-150 
               ${item.active ? "font-[500]" : "font-[400]"} 
               ${
                 item.active
                   ? "text-brand"
                   : "text-gray-500 hover:text-brand"
               }`}
        >
          {item.label}
        </p>
      ))}

      <p
        className={`text-[12px] leading-[25px] cursor-pointer 
             font-[${viewLess.bold ? "500" : "400"}]`}
        style={{ color: viewLess.color }}
      >
        {viewLess.label}
      </p>
    </div>
  );
};

export default ProductPageCategories;
