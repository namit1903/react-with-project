
import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../store/CartSlice.jsx";
import apiSlice from "./authApi.js";

const store = configureStore({
  reducer: {
    cart: CartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
