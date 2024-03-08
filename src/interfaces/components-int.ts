import { Itask } from "./reducer-int";

export interface IchildrenProp {
   children: React.ReactNode;
}

export interface ItaskProp {
   task: Itask;
}

export interface Istatus {
   complete: number;
   active: number;
   total: number;
}
