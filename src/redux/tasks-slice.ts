import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";

import { Itask } from "../interfaces/reducer-int";

const initialState: Array<Itask> = [
   { id: "0", text: "Learn HTML and CSS", completed: true },
   { id: "1", text: "Get good at JavaScript", completed: false },
   { id: "2", text: "Master React", completed: true },
   { id: "3", text: "Discover Redux", completed: false },
   { id: "4", text: "Build amazing apps", completed: true },
];

const tasksSlice = createSlice({
   name: "tasks",
   initialState,
   reducers: {
      addTask: {
         reducer(state, action) {
            state.push(action.payload);
         },
         prepare(text: string): any {
            return {
               payload: {
                  text,
                  id: nanoid(),
                  completed: false,
               },
            };
         },
      },
      deleteTask: (state, action) => {
         const index = state.findIndex(task => task.id === action.payload);
         state.splice(index, 1);
      },
      toggleComplete: (state, action) => {
         for (const task of state) {
            if (task.id === action.payload) {
               task.completed = !task.completed;
               break;
            }
         }
      },
   },
});

export const { addTask, deleteTask, toggleComplete } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
