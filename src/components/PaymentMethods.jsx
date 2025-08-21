import React from "react";

const PaymentMethods = () => {
  return (
    <div className=" w-full bg-white py-3 mt-6 flex justify-center  ">
      <div className=" w-[79%] grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  gap-4 ">

        <div className="p-1.5  w-[318px] ">
          <p className=" text-[#183544] leading-[35px] text-[16px] font-[400px] ">
            Payment Methods
          </p>
          <div className="flex  gap-4 ">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-4">
              <img
                src="CashOnDeliver.png"
                className="w-[52px] h-[28px]"
                alt=""
              />{" "}
              <img src="Visa.png" className="w-[53px] h-[28px]" alt="" />{" "}
              <img src="MasterCard.png" className="w-[53px] h-[28px]" alt="" />{" "}
              <img src="Easypaisa.png" className="w-[53px] h-[28px]" alt="" />{" "}
              <img src="DarazWallet.png" className="w-[53px] h-[28px]" alt="" />{" "}
              <img src="JazzCash.png" className="w-[53px] h-[28px]" alt="" />{" "}
              <img src="UnionPay.png" className="w-[53px] h-[28px] mt-[-3px]" alt="" />{" "}
              <img src="HBL.png" className="w-[53px] h-[28px] mt-[-3px]" alt="" />{" "}
              <img src="EasyMonthly.png" className="w-[53px] h-[28px] mt-[-3px]" alt="" />{" "}
            </div>
          </div>
        </div>

        <div className="ms-[80px] p-1.5">
          <p className="text-[#183544] leading-[35px] text-[16px] font-[400px] ">
            Verified by
          </p>
          <img className="mt-4" src="PCI.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
