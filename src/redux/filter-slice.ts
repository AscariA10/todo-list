import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

import { Ifilter } from "../interfaces/selector-int";

import { statusFilters } from "./constants";

const initialState: Ifilter = {
   status: statusFilters.all,
};

const filterSlice = createSlice({
   name: "filters",
   initialState,
   reducers: {
      setStatusFilter: () => {
         console.log("change of status filter");
      },
   },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
