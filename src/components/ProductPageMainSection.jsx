import React, { useState } from "react";
import { IoGrid } from "react-icons/io5";
import { PiTextColumnsThin } from "react-icons/pi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Paginations from "./Paginations";
import { sortingOptions, sortingFunctions } from "../utils/sorting";
import NotFound from "../components/NotFound";

const ProductPageMainSection = () => {
  const [sortOption, setSortOption] = useState(sortingOptions.BestMacth);
  const [page, setPage] = useState(1);
  const productsPerPage = 40;

  const products = useSelector((state) => state.product.products);
  const searchTerm = useSelector((state) => state.search.term);
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let forYou = filteredProducts.filter((item) => item.forYou === true);
  const navigate = useNavigate();

  forYou = [...forYou].sort(sortingFunctions[sortOption]);

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = forYou.slice(startIndex, endIndex);

  if (filteredProducts.length == 0) {
    return (
      <div className="w-full">
        <NotFound />
      </div>
    );
  }

  return (
    <>
      <div className="  w-[90%] p-1 mt-3.5 mb-22">
        <div className="flex justify-between items-center flex-wrap lg:flex-nowrap mt-[-10px] ">
          <div className="flex flex-col">
            <p className="text-[19px] font-[500] leading-[23px]">headbands</p>
            <p className="text-gray-500 text-[14px] font-[400] leading-[40px]">
              Showing result for headbands
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-10 mt-[22px]">
            <div className="flex items-center gap-2">
              <p className="text-[12px] leading-[40px] font-[380] whitespace-nowrap">
                Sort By:
              </p>

              <div className="relative left-[-2px] w-48">
                <select
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-gray-300 rounded-md placeholder:text-gray-500 px-3 py-[10px] text-[12px] w-52 appearance-none text-gray-800"
                >
                  <option
                    value={sortingOptions.BestMacth}
                    disabled
                    selected
                    className="text-gray-400 "
                  >
                    Best Match
                  </option>
                  <option value={sortingOptions.PriceHighToLow}>
                    Price high to low
                  </option>
                  <option value={sortingOptions.PriceLowToHigh}>
                    Price low to high
                  </option>
                </select>

                <ChevronDown
                  strokeWidth={1}
                  size={20}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-2  sm:mt-0">
              <p className="text-[12px] leading-[40px] font-[380] p-[1px] mr-[-3px] whitespace-nowrap">
                View:
              </p>
              <IoGrid size={20} className="cursor-pointer" />
              <PiTextColumnsThin size={25} className="cursor-pointer" />
            </div>
          </div>
        </div>

        <hr className="w-[100%] mx-auto text-gray-200 mt-4.5" />

        <div className=" relative mt-3 bg-white rounded w-full h-auto p-2 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            {currentProducts.map((product, i) => (
              <div
                key={product.id}
                onClick={() => navigate(`/productDetails/${product.id}`)}
                className={`cursor-pointer bg-white border-gray-200 rounded hover:shadow-[0_0_5px_rgba(0,0,0,0.25)] flex flex-col 
      ${i >= 4 ? "mt-15.5" : ""}`}
              >
                <img
                  src={product.imageURL}
                  className="w-full h-[240px] object-cover"
                  alt=""
                />
                <p className="ms-1.5 mt-[6px] text-[#212121] text-[14px] font-normal leading-[17px] text-center lg:text-start">
                  {product.title} Lorem ipsum dolor sit amet.
                </p>
                <p className="ms-1.5 text-brand text-[18px] text-center lg:text-start font-normal leading-[30px]">
                  RS.{product.price}
                  <span className="text-[12px] font-[400] text-gray-600">
                    -22%
                  </span>
                </p>

                <div className="text-brand text-[18px] ms-[6px] font-normal flex items-center gap-1 justify-center lg:justify-start">
                  <div className="flex gap-[1px]">
                    <FaStar size={11} className="text-[#FACA51]" />
                    <FaStar size={11} className="text-[#FACA51]" />
                    <FaStar size={11} className="text-[#FACA51]" />
                    <FaStar size={11} className="text-[#FACA51]" />
                    <FaStar size={11} className="text-[#FACA51]" />
                  </div>
                  <span className="text-gray-400 text-[12px] font-[400]">
                    (535)
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex absolute right-0 justify-center mt-12">
            <Paginations
              totalProducts={forYou.length}
              productsPerPage={productsPerPage}
              page={page}
              setPage={setPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPageMainSection;
