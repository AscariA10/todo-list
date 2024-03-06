import { configureStore } from "@reduxjs/toolkit";

import { tasksReducer } from "./tasks-slice";
import { filterReducer } from "./filter-slice";

export const store = configureStore({
   reducer: { tasks: tasksReducer, filter: filterReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {tasks: tasksReducer, filter: filterReducer}
export type AppDispatch = typeof store.dispatch;
