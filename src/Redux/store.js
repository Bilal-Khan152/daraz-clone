import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/productSlice";
import searchReducer from "./Slices/searchSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    search: searchReducer,
  },
});
