import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Array<object> = [
   { id: 0, text: "Learn HTML and CSS", completed: true },
   { id: 1, text: "Get good at JavaScript", completed: false },
   { id: 2, text: "Master React", completed: true },
   { id: 3, text: "Discover Redux", completed: false },
   { id: 4, text: "Build amazing apps", completed: true },
];

const tasksSlice = createSlice({
   name: "tasks",
   initialState,
   reducers: {
      addTask: () => {
         console.log("addTask");
      },
      deleteTask: () => {
         console.log("deleteTask");
      },
      toggleComplete: () => {
         console.log("toggleTask");
      },
   },
});

// export const { increment, decrement, incrementByAmount } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
