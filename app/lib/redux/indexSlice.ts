"use client";
// BASIC LIBRERIES

import { createSlice } from "@reduxjs/toolkit";

// set initial state for redux
const initialState = {
  index: 2,
};
//

export const indexSlice = createSlice({
  name: "index",
  initialState: initialState,
  reducers: {
    setIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const { setIndex } = indexSlice.actions;
export default indexSlice.reducer;
