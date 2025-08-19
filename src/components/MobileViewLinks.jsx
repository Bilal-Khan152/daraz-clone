import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";    

const MobileViewLinks = ({ isMobileMenuOpen , handleOnChange , handleSearchBtn}) => {
  const searchTerm = useSelector((state) => state.search.term);
  return (
    <>
      {isMobileMenuOpen && (
        <div className="lg:hidden text-white px-6 pb-4">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="leading-[25px] relative text-start tracking-tighter text-[12px] font-normal  cursor-pointer hover:text-gray-200 transition"
            >
              SAVE MORE ON APP
            </Link>
            <Link
              to="/product"
              className="leading-[25px] relative text-start tracking-tighter text-[12px] font-normal  cursor-pointer hover:text-gray-200 transition"
            >
              {" "}
              SELL ON DARAZ
            </Link>
            <Link className="leading-[25px] relative text-start tracking-tighter text-[12px] font-normal  cursor-pointer hover:text-gray-200 transition">
              HELP & SUPPORT
            </Link>
            <Link className="leading-[25px] relative text-start tracking-tighter text-[12px] font-normal  cursor-pointer hover:text-gray-200 transition">
              LOGIN
            </Link>
            <Link className="leading-[25px] relative text-start tracking-tighter text-[12px] font-normal  cursor-pointer hover:text-gray-200 transition">
              SIGN UP
            </Link>
            <Link className="leading-[25px] relative text-start tracking-tighter text-[12px] font-normal  cursor-pointer hover:text-gray-200 transition">
              {" "}
              زبان تبدیل کریں
            </Link>
            <div className="flex items-center bg-white rounded overflow-hidden">
              <input
                type="text"
                value={searchTerm}
                onChange={handleOnChange}
                placeholder="Search in Daraz"
                className="w-full px-3 py-2 text-black outline-none"
              />
              <button
                onClick={handleSearchBtn}
                className="bg-[#f5e1d5] px-3 py-2 text-[#f85606]"
              >
                <CiSearch strokeWidth={0.5} className="h-[25px] w-[25px]" />
              </button>
            </div>
            <CiShoppingCart size={26} />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileViewLinks;
