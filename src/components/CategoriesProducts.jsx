import { useState } from "react";
import ProductPageFilters from "./ProductPageFilters";
import ProductPageMainSection from "./ProductPageMainSection";
import { IoClose } from "react-icons/io5";

const CategoriesProducts = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-[80%] mx-auto mt-3 ">
      <div className="md:hidden mb-3">
        {sidebarOpen ? (
          <button
            onClick={() => setSidebarOpen(false)}
            className="bg-gray-300 text-black px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
          >
            <IoClose size={18} /> Close Filters
          </button>
        ) : (
          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-brand text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Add Filters
          </button>
        )}
      </div>

      <div className="hidden md:flex sm:flex-row flex-col">
        <ProductPageFilters />
        <ProductPageMainSection />
      </div>

      <div className="md:hidden flex flex-col">
        {sidebarOpen && <ProductPageSidebar />}
        <ProductPageMainSection />
      </div>
    </div>
  );
};

export default CategoriesProducts;
