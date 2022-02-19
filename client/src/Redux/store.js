import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import productsSlice from "./features/products/productsSlice";
import singleProduct from "./features/singleProduct/singleProduct";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsSlice,
    singleProduct: singleProduct,
  },
});
