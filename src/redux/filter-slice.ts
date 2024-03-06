import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { statusFilters } from "./constants";

const initialState: object = {
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

export const filterReducer = filterSlice.reducer;
