import { statusFilters } from "../../redux/constants";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setStatusFilter } from "../../redux/filter-slice";

import { Wrapper, FilterButton } from "./Filter.styled";

// import { addTask, deleteTask, toggleComplete } from "../../redux/tasks-slice";
// import { getTasks, getStatusFilter } from "../../redux/selectors";

export const Filter: React.FC = () => {
   const dispatch = useAppDispatch();
   const filter = useAppSelector(state => state.filter.status);

   const filterHandler: any = (event: any) => {
      dispatch(setStatusFilter(event.target.name));
   };

   return (
      <Wrapper>
         <FilterButton
            name={statusFilters.all}
            type="button"
            onClick={filterHandler}
            color={`${filter === statusFilters.all}`}
         >
            {statusFilters.all}
         </FilterButton>
         <FilterButton
            name={statusFilters.active}
            type="button"
            onClick={filterHandler}
            color={`${filter === statusFilters.active}`}
         >
            {statusFilters.active}
         </FilterButton>
         <FilterButton
            name={statusFilters.completed}
            type="button"
            onClick={filterHandler}
            color={`${filter === statusFilters.completed}`}
         >
            {statusFilters.completed}
         </FilterButton>
      </Wrapper>
   );
};
