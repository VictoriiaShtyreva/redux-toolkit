import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialState, Product } from "../../misc/type";

const productList = [
  { id: 1, name: "product1", price: 1 },
  { id: 2, name: "product2", price: 2 },
  { id: 3, name: "product3", price: 3 },
];

const initialState: InitialState = {
  products: productList,
  favList: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToFav: (state, action: PayloadAction<Product>) => {
      //Check if product already exists in favList using array.some with object comparison
      const { id } = action.payload;
      const isAlredyExist = state.favList.some((product) => product.id === id);
      if (!isAlredyExist) {
        state.favList.push(action.payload);
      }
    },
    //reducer removes the product from the favorite list based on the product ID.
    removeFromFav: (state, action: PayloadAction<number>) => {
      const index = state.favList.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.favList.splice(index, 1);
      }
    },
    //reducer removes the product from the product list based on the product ID.
    removeFromProductList: (state, action: PayloadAction<number>) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },
  },
});

const productReducer = productSlice.reducer;

export const { addToFav, removeFromFav, removeFromProductList } =
  productSlice.actions;
export default productReducer;
