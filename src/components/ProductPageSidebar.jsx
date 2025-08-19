import React from "react";
import { allProductPagecategories, viewLess } from "../Data/index";
import ProductPageCategories from "./ProductPageCategories";
import ProductPageBrand from "./ProductPageBrand";
import ProductPageService from "./ProductPageService";
import ProductPageShiped from "./ProductPageShiped";
import ProductPageWarranty from "./ProductPageWarranty";
import ProductPageSize from "./ProductPageSize";
import ProductPageDelivery from "./ProductPageDelivery";

const ProductPage_Sidebar = () => {
  return (
    <>
      {" "}
      <div className="  sm:w-[18%] w-full p-1.5">
        <ProductPageCategories />
        <hr className="w-[80%] text-gray-200" />
        <ProductPageBrand title="Brand" />
        <hr className="w-[80%] text-gray-200" />
        <ProductPageSize />
        <hr className="w-[80%] text-gray-200" />
        <ProductPageService />
        <hr className="w-[80%] text-gray-200" />
        <ProductPageShiped />
        <hr className="w-[80%] text-gray-200" />
        <ProductPageBrand title="Color Family" />
        <hr className="w-[80%] text-gray-200" />
        <ProductPageDelivery />
        <hr className="w-[80%] text-gray-200" />
        <ProductPageWarranty />
        <hr className="w-[80%] text-gray-200" />
        <ProductPageCategories />
      </div>
    </>
  );
};

export default ProductPage_Sidebar;
