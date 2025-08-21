import React from "react";



const DarazLinks = () => {
  return (
    <div className="w-full   flex justify-center pb-6 md:pb-0">
      <div className="w-[80%] ms-[20px] grid grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-0  ">
        <div className="    w-[79%]">
          <h3 className="font-[400] text-[#0f136d] text-[16px] leading-[35px]">
            Customer Care
          </h3>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px] cursor-pointer">
            Help Center
          </p>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px] cursor-pointer">
            How to Buy
          </p>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px]  cursor-pointer">
            Corporate & Bulk Purchasing
          </p>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px]  cursor-pointer">
            Returns & Refunds
          </p>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px]  cursor-pointer">
            Daraz Shop
          </p>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px]  cursor-pointer">
            Contact Us
          </p>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px]  cursor-pointer">
            Purchase Protection
          </p>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px]  cursor-pointer">
            Daraz Pick up Points
          </p>
        </div>

        <div className="  w-[79%]">
          <h3 className="font-[400] text-[#0f136d] text-[16px] leading-[35px]">
            Daraz
          </h3>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px] cursor-pointer ">
            About Us
          </p>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px] cursor-pointer ">
            Digital Payments
          </p>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px] cursor-pointer ">
            Daraz Donates
          </p>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px] cursor-pointer">
            Daraz Blog
          </p>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px] cursor-pointer ">
            Terms & Conditions
          </p>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px] cursor-pointer">
            Privacy Policy
          </p>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px] cursor-pointer">
            NTN Number : 4012118-6
          </p>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px] cursor-pointer ">
            STRN Number : 1700401211818
          </p>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px] cursor-pointer ">
            Online Shopping App
          </p>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px] cursor-pointer ">
            Online Grocery Shopping
          </p>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px] cursor-pointer">
            Daraz Exclusive
          </p>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px] cursor-pointer">
            Daraz University
          </p>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px] cursor-pointer ">
            Sell on Daraz
          </p>
          <p className="hover:underline text-[12px]  text-[#0f136d] font-[400] leading-[17px] cursor-pointer ">
            Join Daraz Affiliate Program
          </p>
        </div>

        <div className="  mt-6 w-[79%] flex ">
          <img
            src="DarazLogo.png"
            className="w-[45px] h-[45px]"
            alt="Daraz logo"
          />
          <p className="ms-[20px]">
            {" "}
            <span className="font-normal textt-[16px] leading-[18.4px] text-brand">
              Happy Shopping
            </span>{" "}
            <br /> <span className="text-[#0f136d] text-[14px] font-[400] leading-[16.1px]">Download App</span>
          </p>
        </div>

        <div className=" ms-[10px] md:ms-[-80px] h-[100px] mt-6 gap-2 w-[85%]   flex flex-wrap items-center ">
          <img
            src="AppStore.png"
            className="w-[125px] h-[42px] cursor-pointer"
            alt="App Store"
          />
          <img
            src="GooglePlay.png"
            className="w-[125px] h-[42px] cursor-pointer"
            alt="Google Play"
          />
          <img
            src="AppGalary.png"
            className="w-[125px] h-[42px] cursor-pointer"
            alt="App Galary"
          />
        </div>
      </div>
    </div>
  );
};

export default DarazLinks;
