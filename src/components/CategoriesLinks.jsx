import React from "react";
import { ChevronRight } from "lucide-react";
import { categoriesItems } from "../Data/";

const CategoriesLinks = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-wrap gap-2 px-3 py-5">
      {categoriesItems.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <p
            className={`text-[14px] leading-[16px] font-[400] cursor-pointer ${
              item.active ? "text-[#757575]" : "text-[#1a9cb7]"
            }`}
          >
            {item.label}
          </p>
          {index < categoriesItems.length - 1 && (
            <ChevronRight
              size={18}
              className="text-gray-500 text-[18px] leading-[16px] font-[470]"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoriesLinks;
