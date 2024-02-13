import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  counterValue: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counterValue += 1;
    },
    decrement: (state) => {
      state.counterValue -= 1;
    },
    increseByAmount: (state, action: PayloadAction<number>) => {
      state.counterValue += action.payload;
    },
  },
});

const counterReducer = counterSlice.reducer;
export const { increment, decrement, increseByAmount } = counterSlice.actions;
export default counterReducer;
