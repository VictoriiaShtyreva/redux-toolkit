import { createSlice } from "@reduxjs/toolkit";

import { InitialStateAuth } from "../../misc/type";

const initialState: InitialStateAuth = {
  isAuthenticated: false,
};

const authenticationSlace = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

const authenticationReducer = authenticationSlace.reducer;
export const { login, logout } = authenticationSlace.actions;
export default authenticationReducer;
