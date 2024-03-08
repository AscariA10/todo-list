export interface Ifilter {
   status: string;
}

export interface Itask {
   id: string;
   text: string;
   completed: boolean;
}

export interface IfilterStatus {
   all: "all";
   active: "active";
   completed: "completed";
}
