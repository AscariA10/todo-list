import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// import { RootState } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const getTasks: any = (state: object) => {
//    return state.tasks;
// };

// export const getStatusFilter = state: RootState => state.filters.status;
