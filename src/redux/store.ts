import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import productReducer from "./slices/productSlice";
import authenticationReducer from "./slices/authenticationSlace";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
    authentication: authenticationReducer,
  },
});
