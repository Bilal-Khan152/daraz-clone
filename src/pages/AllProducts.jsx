import CategoriesProducts from "../components/CategoriesProducts";
import CategoriesLinks from "../components/CategoriesLinks";
import Categories from "../components/Categories";

const AllProducts = () => {
  return (
    <div className="w-full  bg-white h-auto mb-12">
      <Categories />

      <hr className="w-[79%] mx-auto text-gray-200 mt-[34px] " />
      <CategoriesProducts />
    </div>
  );
};

export default AllProducts;
