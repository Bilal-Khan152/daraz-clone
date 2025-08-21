import React from 'react'

const ProductPageSize = () => {
  return (
      <div className="px-2 mb-4 mt-4">
          <p className="text-[14px] font-[380] leading-[23px]">Size</p>
          <select
            aria-placeholder="EU"
            className=" mt-2 px-2 text-sm placeholder:text-gray-500  border-[1px] border-gray-400 w-[80%] rounded-md"
          >
            <option value="EU">EU</option>
            <option value="INT">INT</option>
          </select>
          <label className=" mt-1.5 flex gap-2 py-[1px]  text-gray-500 text-[12px] font-[400] leading-[16px] cursor-pointer">
            <input type="checkbox"  className="p-6 w-4 h-4  rounded-sm border border-gray-400 cursor-pointer"/>
            <p>22</p>
          </label>
          <label className="flex gap-2 text-gray-500 py-[1px] text-[12px] font-[400] leading-[16px] cursor-pointer">
            <input type="checkbox" className="p-6 w-4 h-4  rounded-sm border border-gray-400 cursor-pointer" />
            <p>41</p>
          </label>
        </div>
  )
}

export default ProductPageSize