import React, { useState } from "react";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import { categories } from "../Data/index";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="relative   mt-[-15px] w-[80%] mx-auto px-[30px] py-2 text-[14px] font-semibold text-[#0f136d] cursor-pointer">
      <div className="relative inline-block group">
        <div className="flex items-center justify-between w-[110px] hover:text-brand p-1.5">
          <span className="text-[14px] font-[500] leading-[40px] text-[#0f136d] tracking-tighter">
            Categories
          </span>
          <ChevronDown
            size={19}
            className="text-gray-800  hover:text-brand group-hover:hidden"
          />
          <ChevronUp
            size={19}
            className="text-gray-800 hover:text-brand hidden group-hover:block"
          />
        </div>

        <div className="absolute left-[-22px] mt-[-5px] w-[190px] bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
          <ul className="divide-gray-200" id="mainMenu">
            {categories.map((cat, i) => (
              <li
                key={i}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                className="flex justify-between items-center text-gray-500 text-[13px] font-[400] leading-[25px] cursor-pointer px-5 hover:text-brand hover:bg-gray-200 transition duration-150"
              >
                {cat}
                <ChevronRight
                  size={20}
                  className={`ml-2 transition ${
                    activeIndex === i ? "text-brand" : "text-gray-400"
                  }`}
                />
              </li>
            ))}
          </ul>

          {activeIndex !== null && (
            <div className="absolute top-0 left-full w-[190px] h-full bg-white border border-gray-200 rounded shadow-lg z-20">
              <ul className="divide-gray-200">
                {categories.map((sub, j) => (
                  <li
                    key={j}
                    className="text-gray-500 text-[13px] font-[400] leading-[25px] cursor-pointer px-5 hover:text-brand hover:bg-gray-100 transition duration-150"
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
