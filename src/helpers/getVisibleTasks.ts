import { Itask } from "../interfaces/reducer-int";
import { statusFilters } from "../redux/constants";

export const getVisibleTasks = (tasks: Array<Itask>, statusFilter: string): Array<Itask> => {
   switch (statusFilter) {
      case statusFilters.active:
         return tasks.filter(task => !task.completed);
      case statusFilters.completed:
         return tasks.filter(task => task.completed);
      default:
         return tasks;
   }
};
