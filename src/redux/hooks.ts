import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// import { RootState } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const getTasks: object = (state: RootState) => {
//    return state.tasks;
// };

// export const getStatusFilter: object = (state: RootState) => state.filter.status;
