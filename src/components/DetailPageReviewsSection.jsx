import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ArrowUpDown, ThumbsUp, MessageSquareReply } from "lucide-react";
import Rating from "./Rating";
import { getTotalReviews } from "../utils/calculation";

const DetailPageReviewsSection = ({ product }) => {
  const products = useSelector((state) => state.product.products);
  const searchTerm = useSelector((state) => state.search.term);
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalReviews = getTotalReviews(product.ratingBreakdown);
  console.log("total reviews", totalReviews);

  return (
    <>
      <div className="w-[90%]   mx-auto md:w-[65%]  flex flex-col mt-[15px] md:ms-[168px] bg-white ">
        <div className="w-full bg-[#FAFAFA]">
          <p className="text-[16px] font-[500] leading-[22px] p-4 px-6">
            Product detail of {product.title}
          </p>
        </div>
        <ul className="text-[14px] mt-4 text-gray-900 font-[400] leading-[18px] list-disc px-10 mb-5">
          <li>{product.description}</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>
            Et at, beatae architecto nihil reiciendis placeat officiis
            assumenda.
          </li>
        </ul>
        <img
          src={product.productImages[0]}
          alt=""
          className="w-[600px] h-[600px]"
        />
        <div className="mt-10 mb-6 flex justify-center">
          <button className="rounded-[1px] border-[1px] border-[#1A9DC4] text-[#1A9DC4]  font-normal cursor-pointer py-1 px-6 sm:px-20 md:px-36 lg:px-[20px] hover:text-white hover:bg-blue-600 transition duration-300">
            VIEW MORE
          </button>
        </div>
      </div>

      <div className="w-[90%] mx-auto md:w-[65%] flex flex-col mt-[12px] md:ms-[168px] bg-white pb-4">
        <div className="w-full bg-[#FAFAFA]">
          <p className="text-[16px] p-4 px-5 font-[500] leading-[22px]">
            Rating & Reviews of {product.title}
          </p>
        </div>

        <div className="flex flex-wrap px-6 p-2 gap-18 items-start mt-6">
          <div className="flex flex-col items-start">
            <div className="flex items-end">
              <span className="text-[48px] leading-[55.2px] font-[400]">
                {product.rating}
              </span>
              <span className="text-gray-400 text-[32px] font-[400] leading-[40px]">
                /5
              </span>
            </div>
            <div className="flex mt-3 gap-1">
              <Rating
                rating={product.rating}
                reviewsCount={totalReviews}
                className="text-stars fill-stars  w-7.5 h-7.5"
                emptyStarStyle="text-gray-300 w-7 h-7"
              />
            </div>
            <div className="text-gray-500 text-xs mt-3">
              {totalReviews} Ratings
            </div>
          </div>

          <div className="flex flex-col gap-1">
            {[5, 4, 3, 2, 1].map((star) => {
              const value = product.ratingBreakdown[star] || 0;
              const percent = totalReviews ? (value / totalReviews) * 100 : 0;

              return (
                <div key={star} className="flex items-center gap-2.5 py-[4px]">
                  <div className="flex w-[90px] gap-[1px]">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar
                        key={idx}
                        size={15}
                        className={
                          idx < star ? "text-[#FACA51]" : "text-gray-300"
                        }
                      />
                    ))}
                  </div>

                  <div className="w-[135px] h-3 bg-[#EFF0F5] overflow-hidden">
                    <div
                      className="h-3 bg-[#FACA51]"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>

                  <div className="w-[30px] text-[12px] font-[400] leading-[13.8px] text-gray-600">
                    {value}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <hr className="text-gray-200 mt-8" />

        <div className="flex flex-wrap items-center justify-between  gap-3 h-[44px] ">
          <p className="text-[14px] text-gray-700 font-[500] px-6 leading-[44px]">
            Product Reviews
          </p>

          <div className="flex items-center gap-2 pr-3.5  text-[13px] h-[40px] ">
            <div className="flex items-center gap-1 border-l border-r border-gray-300 cursor-pointer h-full px-3">
              <ArrowUpDown className="text-gray-500" size={18} />
              <span className="text-gray-500">Sort:</span>
              <span className="text-gray-800">Relevance</span>
            </div>

            <div className="flex items-center gap-1  cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4.5h18M4.5 9h15M6 13.5h12M9 18h6"
                />
              </svg>
              <span className="text-gray-500 ">Filter:</span>
              <span className="text-gray-800">All star</span>
            </div>
          </div>
        </div>

        <hr className="text-gray-200" />

        {product.productReviews.map((element) => (
          <div className="relative">
            <div>
              <div className="flex mt-[12px] justify-between items-center  ">
                <div className=" px-5 py-2">
                  <p className="flex gap-[1px]">
                    <Rating
                      rating={element.user.rating}
                      emptyStarStyle="w-4 h-4 text-gray-200"
                      className="text-stars fill-stars w-4 h-4"
                    />
                  </p>
                  <p className="text-[12px] px-[1px] mt-1 text-gray-500 flex gap-2">
                    {element.user.username}
                    <span className="text-green-600 text-[13px]  flex items-center">
                      <img
                        src="//img.lazcdn.com/g/tps/tfs/TB1bOqBeb_I8KJjy1XaXXbsxpXa-30-32.png"
                        className="  w-4 h-4 mr-1"
                      />
                      <p className="font-[300] text-[12px] leading-[13.8px]">
                        {element.user.isVerified
                          ? "Verified Purchase"
                          : "Not Verified by user"}
                      </p>
                    </span>
                  </p>
                </div>

                <div className="mr-[20px] mt-[-25px] ">
                  <p className="text-[12px] font-[400] leading-[13.8px] text-gray-600">
                    {element.user.date}
                  </p>
                </div>
              </div>

              <div className="px-5">
                <p className="text-[14px] font-[400]">{element.user.comment}</p>
              </div>

              <div className="flex gap-2 mt-2 px-3">
                {element.user.images.map((img) => (
                  <img src={img} className="w-[100px] h-[100px]" alt="" />
                ))}
              </div>

              <p className=" px-5 mt-2 font-[400] text-[12px] leading-[13.8px] text-gray-500">
                Color Family : {element.user.colorFamily}
              </p>
              <p className="px-5 mt-2 gap-1 font-[400] text-[12px] leading-[13.8px] text-gray-500 items-center flex">
                <ThumbsUp size={15} /> {element.user.likes}
              </p>
            </div>

            <div className="mt-4 bg-gray-100 px-[20px] py-[12px] w-[800px] mx-auto">
              <p className="font-[400] flex gap-1  text-[12px] leading-[13.8px] text-gray-500">
                <MessageSquareReply size={16} />
                <span className="text-red-600 ">
                  {" "}
                  {element.replay.username} - {element.replay.date}
                </span>
              </p>
              <p className="text-[14px] font-[400] mt-2">
                {element.replay.comment}
              </p>
              <p className=" mt-2 gap-1 font-[400] text-[12px] leading-[13.8px] text-gray-500 items-center flex">
                <ThumbsUp size={15} /> {element.replay.likes}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[90%] mx-auto md:w-[65%]  flex flex-col mt-[12px] md:ms-[168px] bg-white pb-5 ">
        <div className="w-full h-[52px] bg-[#FAFAFA]">
          <p className="text-[15px]   px-6  font-[500] leading-[52px]">
            Questions about this product ({product.conversation.length})
          </p>
        </div>

        <div className="mt-2 pt-1 space-y-2 px-6">
          <p className="text-[14px] text-blue-600 font-[400] leading-[16.1px] cursor-pointer">
            Login <span className="text-[12px] text-gray-800">or</span> Register{" "}
            <span className="text-[11px] text-gray-800 font-[400] leading-[13px] ">
              to ask questions
            </span>
          </p>

          <p className="text-[15px] font-[400] pt-2 leading-[17px] text-gray-800">
            Other questions answered by Umm-E-Hani Trader Lahore ({product.conversation.length})
          </p>

          {product.conversation.map((elem) => (
            <div className="border-t border-gray-200 pt-7">
              <div className="flex flex-wrap items-center gap-6">
                <span className="bg-[#2EA5BD] text-white font-light text-xs px-[6px] py-[1px] mt-[-10px] rounded ">
                  Q
                </span>
                <div>
                  <p className="text-[14px] font-[400] leading-[16.1px] text-gray-900">
                    {elem.question.text}
                  </p>
                  <p className="text-[11px] leading-[13.1px] font-[400] mt-1   text-gray-500">
                    {elem.question.username}. - {elem.question.date}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-8">
                <span className="bg-[#9E9E9E] text-white font-light text-xs px-[6px] py-[1px] rounded mt-[-10px]">
                  A
                </span>
                <div>
                  <p className="text-[14px] font-[400] leading-[16.1px] text-gray-900">
                     {elem.answer.text}
                  </p>
                  <p className="text-[11px] leading-[13.1px] font-[400] mt-1   text-gray-500">
                    {elem.answer.username} -  {elem.answer.date}
                  </p>
                </div>
              </div>
            </div>
          ))}

         
        </div>
      </div>
    </>
  );
};

export default DetailPageReviewsSection;
