import { configureStore } from "@reduxjs/toolkit";
import ecommerceReducers from "../slice/index";

export const store = configureStore({
  reducer: {
    reactecommerce: ecommerceReducers,
  },
});
