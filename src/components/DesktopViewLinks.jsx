import React from "react";
import { Link } from "react-router-dom";

const DesktopViewLinks = () => {
  return (
    <div className=" relative left-[-3.5px] top-[-1px] hidden lg:flex justify-end text-white text-sm px-6  gap-9 mr-[135px]">
      <Link>
        <span className="leading-[25px] tracking-normal relative text-start text-[12px] font-[400] cursor-pointer hover:text-gray-200 transition">
          SAVE MORE ON APP
        </span>
      </Link>
      <Link>
        <span className="leading-[25px] relative text-start tracking-normal text-[12px] font-[400]  cursor-pointer hover:text-gray-200 transition">
          {" "}
          SELL ON DARAZ{" "}
        </span>
      </Link>
      <Link>
        <span className="leading-[25px] relative text-start ttracking-normal text-[12px] font-[400]  cursor-pointer hover:text-gray-200 transition">
          HELP & SUPPORT
        </span>
      </Link>
      <Link>
        <span className="leading-[25px]  relative text-start tracking-normal  text-[12px] font-[400]   cursor-pointer hover:text-gray-200 transition">
          LOGIN
        </span>
      </Link>
      <Link to="/">
        <span className="leading-[25px] relative text-start tracking-normal text-[12px] font-[400]  cursor-pointer hover:text-gray-200 transition">
          SIGN UP
        </span>
      </Link>
      <Link to="/product">
        <span className="leading-[25px] relative text-start tracking-normal text-[12px] font-[400]  cursor-pointer hover:text-gray-200 transition">
          زبان تبدیل کریں
        </span>
      </Link>
    </div>
  );
};

export default DesktopViewLinks;
