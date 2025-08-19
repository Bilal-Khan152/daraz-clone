import ProductDetail from "../components/ProductDetail";
import Categories_Links from "../components/CategoriesLinks";
import DetailPageReviewsSection from "../components/DetailPageReviewsSection";
import Categories from "../components/Categories";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import NotFound from "../components/NotFound";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.product.products.find((p) => p.id == id)
  );
  if (!product) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }

  return (
    <div className="h-auto w-full mb-12 ">
      <div className="bg-white w-full h-[54px] sticky top-14   z-10  ">
        <Categories />
      </div>

      <div className="mt-10 md:mt-[-5px] ms-[2px] bg-[#EFF0F5]">
        <Categories_Links />
      </div>
      <div className="bg-[#EFF0F5]">
        <ProductDetail product={product} />
      </div>
      <div className="bg-[#EFF0F5]">
        <DetailPageReviewsSection product={product} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
