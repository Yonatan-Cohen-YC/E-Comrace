import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import productsSlice from "./features/products/productsSlice";
import singleProduct from "./features/singleProduct/singleProduct";
import productsByCtg from "./features/productsByCtg/productsByCtg";
import cart from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsSlice,
    singleProduct: singleProduct,
    productsByCtg: productsByCtg,
    cart: cart,
  },
});
