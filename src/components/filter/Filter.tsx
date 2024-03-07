import { statusFilters } from "../../redux/constants";
import { Wrapper, FilterButton } from "./Filter.styled";

// import { useAppSelector, useAppDispatch } from "../../redux/hooks";
// import { addTask, deleteTask, toggleComplete } from "../../redux/tasks-slice";
// import { getTasks, getStatusFilter } from "../../redux/selectors";

export const Filter: React.FC = () => {
   // const tasks = useAppSelector(state => state.tasks);
   // const filter = useAppSelector(state => state.filter.status);
   // const dispatch = useAppDispatch();

   // function handleClick(): void {
   //    dispatch(addTask("my new task for test"));
   // }
   console.log(statusFilters);

   return (
      <Wrapper>
         <FilterButton>{statusFilters.all}</FilterButton>
         <FilterButton>{statusFilters.active}</FilterButton>
         <FilterButton>{statusFilters.completed}</FilterButton>
      </Wrapper>
   );
};
