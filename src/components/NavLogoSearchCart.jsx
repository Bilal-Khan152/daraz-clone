import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { setSearchTerm } from "../Redux/Slices/searchSlice";

const NavLogoSearchCart = ({ handleSearchBtn, hideDesktopLinks }) => {
  const searchTerm = useSelector((state) => state.search.term);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div
      className={`hidden lg:flex gap-14 xl:ml-[160px] items-center py-2 me-10 transition-all duration-300 ${
        hideDesktopLinks ? "mt-[6px]" : "mt-[3px]"
      }`}
    >
      <img
        onClick={() => navigate("/")}
        className="h-[40px] w-[127px] cursor-pointer relative left-[6px] top-1"
        src="daraz.PK.png"
        alt="Logo"
      />

      <div className="flex items-center bg-white rounded-[2px] ms-6 w-[687px] overflow-hidden relative left-[3px]">
        <input
          type="text"
          className="  box-border w-full h-full px-[17px] py-[14px] font-['Roboto-Regular','Helvetica','sans-serif'] text-[14px] tracking-[0] text-[#212121] border-none outline-none bg-white shadow-none rounded-[1px] placeholder:text-[13.5px] 
                  font-[400] leading-6"
          placeholder="Search in Daraz"
          value={searchTerm}
          onChange={(event) => handleOnChange(event)}
        />
        <button
          onClick={handleSearchBtn}
          className="bg-[#f5e1d5] cursor-pointer px-[10px] py-[10px] text-brand"
        >
          <CiSearch strokeWidth={0.5} className="h-[25px] w-[25px]" />
        </button>
      </div>

      <div className=" ms-[-24px] mt-2.5 cursor-pointer text-white text-4xl">
        <svg
          width="30"
          height="30"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.51345 5H1.33325V3H6.15306L7.21972 8.33333H30.5315L27.5012 25H8.51345L4.51345 5ZM7.61972 10.3333L10.1531 23H25.832L28.135 10.3333H7.61972Z"
            fill="white"
          ></path>
          <path
            d="M11.9999 28C11.9999 28.7364 11.403 29.3333 10.6666 29.3333C9.93021 29.3333 9.33325 28.7364 9.33325 28C9.33325 27.2636 9.93021 26.6667 10.6666 26.6667C11.403 26.6667 11.9999 27.2636 11.9999 28Z"
            fill="white"
          ></path>
          <path
            d="M25.3333 29.3333C26.0696 29.3333 26.6666 28.7364 26.6666 28C26.6666 27.2636 26.0696 26.6667 25.3333 26.6667C24.5969 26.6667 23.9999 27.2636 23.9999 28C23.9999 28.7364 24.5969 29.3333 25.3333 29.3333Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default NavLogoSearchCart;
