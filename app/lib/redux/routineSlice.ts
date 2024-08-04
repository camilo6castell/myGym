"use client";
// BASIC LIBRERIES

import { createSlice } from "@reduxjs/toolkit";

// TYPES FROM STORE TO USE HERE

// import { AppDispatch, RootState } from "./store";
import { RoutineType } from "../typesTs";

// set initial state for redux
const initialState: RoutineType = {
  number: 666,
  objective: "",
  days: [],
};
//

export const routineSlice = createSlice({
  name: "routine",
  initialState: initialState,
  reducers: {
    setRoutine: (state, action) => {
      const { number, objective, days } = action.payload;
      state.number = number;
      state.objective = objective;
      state.days = days;
    },
  },
});

export const { setRoutine } = routineSlice.actions;
export default routineSlice.reducer;
