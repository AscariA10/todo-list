import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

import { Ifilter } from "../interfaces/reducer-int";

import { statusFilters } from "./constants";

const initialState: Ifilter = {
   status: statusFilters.all,
};

const filterSlice = createSlice({
   name: "filters",
   initialState,
   reducers: {
      setStatusFilter: (state, action) => {
         state.status = action.payload;
      },
   },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
