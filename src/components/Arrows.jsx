import { ChevronLeft, ChevronRight } from "lucide-react";

export const NextArrow = ({ onClick, isHovered }) => (
  <div
    onClick={onClick}
    className={`absolute right-0 bg-black/20 px-1 py-[6px] text-white rounded-l-2xl 
top-1/2 -translate-y-1/2 z-10 transition-opacity duration-200 cursor-pointer 
${isHovered ? "opacity-100" : "opacity-0"}`}
  >
    <ChevronRight size={20} strokeWidth={2} />
  </div>
);

export const PrevArrow = ({ onClick, isHovered }) => (
  <div
    onClick={onClick}
    className={`absolute left-0 bg-black/20 px-1  py-[6px] text-white rounded-r-2xl 
top-1/2 -translate-y-1/2 z-10 transition-opacity duration-200 cursor-pointer 
${isHovered ? "opacity-100" : "opacity-0"}`}
  >
    <ChevronLeft size={20} strokeWidth={2} />
  </div>
);
