import React from "react";
import { countries_Data, social_Media } from "../Data";

const SocialLinks = () => {
  return (
    <div className="w-full bg-white px-4 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 text-sm text-[#333] mt-10">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row flex-wrap lg:flex-nowrap justify-between gap-8">
        <div className="w-full lg:w-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div>
              <p className="font-[400] leading-[20px] text-[16px] text-[#2a2a2a] ">
                Daraz International
              </p>
              <div className="flex flex-wrap gap-3 mt-3">
                {countries_Data.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <img
                      src={item.src}
                      className="w-[30px] h-[30px] object-contain"
                      alt={item.label}
                    />
                    <p className="ms-2 text-[14px] text-gray-500 font-[500]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-[400] leading-[20px] text-[16px] text-[#2a2a2a] mb-2">
                Follow Us
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                {social_Media.map((icon, idx) => (
                  <a
                    key={idx}
                    href={icon.to}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-[24px] h-[24px] object-contain cursor-pointer"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-auto">
          <p className="font-[400] leading-[20px] text-[14px] text-[#606060] mb-2">
            @Daraz 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
