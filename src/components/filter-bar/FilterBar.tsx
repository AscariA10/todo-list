import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { addTask, deleteTask, toggleComplete } from "../../redux/tasks-slice";
import { getTasks, getStatusFilter } from "../../redux/selectors";

export const FilterBar: React.FC = () => {
   const tasks = useAppSelector(state => state.tasks);
   const filter = useAppSelector(state => state.filter.status);
   const dispatch = useAppDispatch();

   function handleClick(): void {
      dispatch(addTask("my new task for test"));
   }

   return (
      <button type="button" onClick={handleClick}>
         task filter bar
      </button>
   );
};
