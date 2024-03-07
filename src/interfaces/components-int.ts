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

//  export interface Ititle {
//     title: string;
//  }

// export interface Ibutton {
//    color: string;
// }

//  export interface IsizeProps extends IChildrenProp {
//     width: Iwidth;
//     height: Iheight;
//  }

//  export interface IcardProps {
//     title: string;
//     description: string;
//     image: string;
//     techStack: Array<technologie>;
//  }
