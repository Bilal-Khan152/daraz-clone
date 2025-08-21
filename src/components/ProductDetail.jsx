import React, { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { MdOutlineDoNotDisturbOff } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { MdShare } from "react-icons/md";
import { Receipt } from "lucide-react";
import { getOldPrice, getTotalReviews } from "../utils/calculation";
import ProductImageSlider from "./ProductImageSlider";
import Rating from "./Rating";

const ProductDetail = ({ product }) => {
  const [count, setCount] = useState(1);

  const handleIncrementBtn = () => {
    setCount(count + 1);
  };

  const handleDecrementBtn = () => {
    setCount(count - 1);
  };

  const totalReviews = getTotalReviews(product.ratingBreakdown);

  return (
    <div className="w-full flex mt-[-5px]">
      <div className="relative h-auto w-full sm:w-[90%] lg:w-[78%] mx-auto bg-white flex flex-col lg:flex-row justify-between gap-4">
        <div className="p-3 h-auto flex flex-col  items-start">
          <img
            className="rounded w-full max-w-[400px] h-auto object-cover"
            src={product.productImages[0]}
            alt="something went wrong"
          />
          <div className="mt-3">
            <ProductImageSlider product={product} />
          </div>
        </div>

        <div className=" px-[8px]  lg:px-0 w-full lg:w-[52%]">
          <p className="text-[18px] sm:text-[20px] lg:text-[23px] font-[400] leading-[25px] mt-[15px] w-full max-w-[450px] tracking-tight break-words">
            {product.title} Stainless Steel Balde Rubber Handle Big Blade
            Household Kitchen Accessories Pizza Cutter
          </p>
          <div className="flex justify-between items-center mt-8 flex-wrap gap-2">
            <div className="flex items-center flex-wrap">
              <Rating
                rating={product.rating}
                reviewsCount={totalReviews}
                answersCount="| 9 Answered Questions"
                className="w-3 h-3 fill-stars text-stars"
                emptyStarStyle="w-3 h-3 text-gray-300"
                showRating
              />
            </div>
            <div className="flex items-center gap-1">
              <MdShare size={22} className="text-gray-500" />
              <CiHeart size={22} className="text-gray-500" />
            </div>
          </div>
          <div className="flex justify-between items-center mt-4.5">
            <p className="text-[12px] text-gray-400">
              Brand :
              <span className=" ms-[1px] cursor-pointer hover:underline text-blue-600">
                {product.brand.text}
              </span>
            </p>
          </div>
          <div className="mt-[18px]">
            <img
              src="https://img.lazcdn.com/us/lazgcp/6af86db1-d551-4004-aec1-a7ec41a3deb9_ALL-480-72.png_960x960q80.png_.webp"
              alt=""
            />
          </div>

          <p className="mt-4 text-brand text-3xl ">
            RS. {product.price * count}
          </p>

          <del className="text-[13px] tracking-normal font-[400] text-gray-400 leading-[34.5px]">
            RS.{getOldPrice(product.price, product.discount)}
          </del>
          <span className="ms-1 text-[13px] text-black">
            -{product.discount}%
          </span>

          <hr className="text-gray-200 mt-4" />

          <div className="flex flex-col gap-2 mt-6">
            <div className="flex items-center gap-3.5">
              <p className="text-[#757575] font-[400] leading-[18px] text-[14px]">
                Color family
              </p>
              <p className="text-black font-[400] leading-[18px] text-[14px] tracking-tighter">
                Multicolor
              </p>
            </div>

            <div className="relative left-[95px] w-[35px] h-[35px] border border-brand rounded-sm flex items-center justify-center">
              <img
                src={product.productImages[0]}
                alt=""
                className="w-[35px] h-[35px] object-contain"
              />
            </div>
          </div>

          <div className="flex items-center gap-6 mt-7 flex-wrap">
            <p className="text-[13px] text-[#757575] font-medium leading-[16px]">
              Quantity :
            </p>
            <button
              disabled={count <= 1}
              className={`${
                count <= 1 ? "cursor-not-allowed" : "cursor-pointer"
              } px-2.5 rounded text-gray-400 font-semibold text-xl`}
              onClick={handleDecrementBtn}
            >
              -
            </button>
            <p className="font-normal text-lg">{count}</p>

            <button
              onClick={handleIncrementBtn}
              className="w-7 h-7 flex items-center text-xl justify-center border border-gray-200 bg-gray-200 text-gray-600  leading-none"
            >
              +
            </button>
          </div>

          <div className="mt-9 flex flex-col sm:flex-row flex-wrap items-start gap-3">
            <button className="bg-[#2abbe8] hover:bg-[#25a6ce] transition text-white cursor-pointer w-[210px] py-2 text-[17px]">
              Buy Now
            </button>

            <button className="bg-brand hover:bg-brand transition text-white cursor-pointer w-[210px] py-2 text-[17px]">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[35%] bg-gray-50 mb-2 self-start">
          <div className=" mt-1.5 flex justify-between items-center p-4.5">
            <p className="font-[600] text-[11px] leading-[12px]  text-[#757575]">
              Delivery Options
            </p>
            <IoIosInformationCircleOutline
              size={13}
              className="cursor-pointer"
            />
          </div>

          <div className="flex justify-between items-center p-5 mt-[-25px]   gap-2">
            <IoLocationOutline size={22} className="text-gray-500" />
            <p className="flex-1 min-w-0 tracking-tighter  text-gray-700 font-[500] text-[14px] leading-[16.1px] break-words">
              {product.deliverOptions.address}
            </p>
            <p className="font-[300] text-[13px] text-blue-700 leading-[14.93px] cursor-pointer whitespace-nowrap">
              CHANGE
            </p>
          </div>

          <hr className="text-gray-200 mt-[-9px]" />

          <div className="flex justify-between items-center p-5 mt-[-6px] gap-2">
            <CiDeliveryTruck size={22} className="text-gray-500" />
            <div className="flex flex-col flex-1 min-w-0 font-[500] p-[1px] text-[14px] leading-[16px] break-words">
              <p className="text-gray-700 tracking-tighter   font-[500] text-[14px] leading-[16.1px] break-words ">
                {product.deliverOptions.delivery.type}
              </p>
              <p className="text-gray-400 leading-[24px] text-[11px]">
                Get by {product.deliverOptions.delivery.date}
              </p>
            </div>
            <p className="font-[500] text-[14px] cursor-pointer whitespace-nowrap">
              RS.{product.deliverOptions.delivery.rupees}
            </p>
          </div>

          <div className="flex items-center p-5 mt-[-26px] gap-2">
            <Receipt strokeWidth={1.0} size={22} className="text-gray-500" />
            <p className="flex-1 min-w-0 font-[500] text-gray-700  tracking-tight text-[14px] leading-[16px] break-words">
              {product.deliverOptions.paymentType}
            </p>
          </div>

          <hr className="text-gray-200" />

          <div className="flex justify-between items-center p-4 mt-2">
            <p className="font-[600] text-[11px] leading-[12px]  text-[#757575]">
              Return & Warranty
            </p>
            <IoIosInformationCircleOutline
              size={13}
              className="cursor-pointer"
            />
          </div>

          <div className="flex flex-col p-4.5 mt-[-33px]">
            <div className="flex items-center py-3.5">
              <IoIosInformationCircleOutline
                size={22}
                className="mr-[15px] text-gray-500"
              />
              <p className="flex-1 min-w-0 font-[500] text-gray-700  tracking-tight text-[14px] leading-[16px] break-words">
                {product.return.change}
              </p>
            </div>
            <div className="flex items-center py-3">
              <MdOutlineAccessTime
                size={20}
                className="mr-[15px] text-gray-500"
              />
              <p className="font-[500] text-gray-700  text-[14px] leading-[16px]">
                {product.return.days}
              </p>
            </div>
            <div className="flex items-center py-3">
              <MdOutlineDoNotDisturbOff
                size={20}
                className="mr-[15px] text-gray-500"
              />
              <p className="font-[500] text-gray-700  text-[14px] leading-[16px]">
                {product.return.warranty}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4.5 mt-[-18px]">
            <img
              className="w-[150px] h-[120px] object-contain"
              src="https://hexdocs.pm/qr_code/docs/qrcode.svg"
              alt="QR code"
            />

            <div className="relative bg-white px-3 w-[180px] h-[120px] rounded-md shadow-md flex items-center gap-2 cursor-pointer">
              <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 shadow-md"></div>

              <div className="flex flex-col gap-3  ">
                <img
                  src="https://img.drz.lazcdn.com/g/tps/imgextra/i1/O1CN01XrNYQP1paGCVispyM_!!6000000005376-2-tps-82-82.png"
                  className="w-[45px] h-[45px] object-contain"
                  alt="Daraz logo"
                />

                <p className="text-gray-400 mt-1 text-[12px] leading-[13.1px] font-[400] ">
                  Download app to enjoy <br /> exclusive discounts!
                </p>
              </div>
            </div>
          </div>

          <hr className="text-gray-200" />

          <div className="flex flex-col p-2 mt-[-10px]">
            <div className="flex items-center py-3">
              <IoIosInformationCircleOutline
                size={20}
                className="mr-[15px] text-gray-500"
              />
              <p className="font-[500]  text-gray-700  text-[14px] leading-[16px]">
                Change of Mind
              </p>
            </div>
            <div className="flex items-center py-3">
              <MdOutlineAccessTime
                size={20}
                className="mr-[15px] text-gray-500"
              />
              <p className="font-[500] text-gray-700  text-[14px] leading-[16px]">
                14 days easy return
              </p>
            </div>
            <div className="flex items-center py-3">
              <MdOutlineDoNotDisturbOff
                size={20}
                className="mr-[15px] text-gray-500"
              />
              <p className="font-[500] text-gray-700  text-[14px] leading-[16px]">
                Warranty not available
              </p>
            </div>
          </div>
          <hr className="text-gray-200 bg-white p-4" />

          <div className="flex justify-between items-center p-2 mb-2 gap-2">
            <IoLocationOutline size={22} className="text-gray-500" />
            <p className="flex-1 min-w-0 font-[500] text-gray-700  text-[14px] leading-[16px] break-words">
              Sindh, Karachi - Gulshan-e-Iqbal, Block 15
            </p>
            <p className="font-[450] text-[14px] text-blue-700 cursor-pointer whitespace-nowrap">
              CHANGE
            </p>
          </div>

          <hr className="text-gray-200" />

          <div className="flex justify-between items-center p-2 mt-2 gap-2">
            <CiDeliveryTruck size={22} className="text-gray-500" />
            <div className="flex flex-col flex-1 min-w-0 font-[500] text-[14px] leading-[16px] break-words">
              <p className="text-gray-700 ">Standard Delivery</p>
              <p className="text-gray-400 text-[12px]">Get by 13-17 Aug</p>
            </div>
            <p className="font-semibold text-[14px] cursor-pointer whitespace-nowrap">
              RS.160
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
