import type { RootState } from "./store";

export const getTasks: object = (state: RootState) => state?.tasks;

export const getStatusFilter: object = (state: RootState) => state?.filter.status;
