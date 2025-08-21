import FlashSaleSection from "./FlashSaleSection";
import CategoriesSection from "./CategoriesSection";
import ForYouSection from "./ForYouSection";

const ProductsSection = () => {
  return (
    <div className="w-full  flex flex-col  ">
      <p className="   relative left-2 w-[80%] mx-auto  font-[400] mt-[22px] text-[#424242] text-[22px] leading-[38px] tracking-normal ">
        Flash Sale
      </p>
      <div className="   mt-1 bg-white  mx-auto  not-first: w-[79%] h-auto gap-2 py-2">
        <FlashSaleSection />
      </div>

      <p className="relative  left-2  w-[80%]  mx-auto  font-normal mt-[22px] text-[#424242]   text-[22px] leading-[38px] tracking-normal">
        Categories
      </p>

      <CategoriesSection />

      <p className="relative  left-2 w-[80%] mx-auto font-normal mt-[22px] text-[#424242]  text-[22px] leading-[38px] tracking-normal">
        Just For You
      </p>

      <ForYouSection />

      <div className="mt-10 mb-6 flex justify-center">
        <button className="w-[387px] h-[40px] rounded-[1px] border-[1px] border-[#1A9DC4] text-[#1A9DC4] text-[14px] font-[400] cursor-pointer py-2 px-6 sm:px-20 md:px-36 lg:px-[150px]">
          LOAD MORE
        </button>
      </div>
    </div>
  );
};

export default ProductsSection;
