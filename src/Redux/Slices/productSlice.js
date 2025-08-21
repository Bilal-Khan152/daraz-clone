import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { Product_Data } from "../../Data/index";

const initialState = {
  products: Product_Data
};

export const productSlice = createSlice({
  name: "product" ,
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { title, imageURL, price, description } = action.payload;
      state.products.push({
        id: nanoid(),
        title,
        imageURL,
        description,
        price,
      });
    },
  },
});

export const { addProduct } = productSlice.actions ;
export default productSlice.reducer ;
