import React from "react";
import { Link } from "react-router-dom";


const NavbarForProductPage = () => {
  const isProductPage =
    location.pathname.startsWith("/product") ||
    location.pathname.startsWith("/productDetails/:id");

  return (
    <>
      {isProductPage && (
        <div className="hidden  lg:flex gap-1.5 ml-[371px] mt-[-6px]">
          <Link className="text-white text-[11px] font-[400] leading-[13px] tracking-normal ">
            bags for girls
          </Link>
          <p className="text-white text-[11px] font-[400] leading-[13px]  tracking-normal">
            |
          </p>
          <Link className="text-white text-[11px] font-[400] leading-[13px] tracking-normal">
            water bottle
          </Link>
          <p className="text-white text-[11px] font-[400] leading-[13px] tracking-normal">
            {" "}
            |
          </p>
          <Link className="text-white text-[11px] font-[400] leading-[13px] tracking-normal">
            watch for boys
          </Link>
          <p className="text-white text-[11px] font-[400] leading-[13px]  tracking-normal">
            |
          </p>
          <Link className="text-white text-[11px] font-[400] leading-[13px] tracking-normal">
            laptop
          </Link>
          <p className="text-white text-[11px] font-[400] leading-[13px] tracking-normal">
            |
          </p>
          <Link className="text-white text-[11px] font-[400] leading-[13px] tracking-normal">
            airpods
          </Link>
        </div>
      )}
    </>
  );
};

export default NavbarForProductPage;
