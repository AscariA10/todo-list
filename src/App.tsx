import { TaskCard } from "./components/task-card/TaskCard";
import { FilterBar } from "./components/filter-bar/FilterBar";

import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { addTask, deleteTask, toggleComplete } from "./redux/tasks-slice";
import { getTasks, getStatusFilter } from "./redux/selectors";

function App() {
   const tasks = useAppSelector(state => state.tasks);
   const filter = useAppSelector(state => state.filter.status);
   // const dispatch = useAppDispatch();
   // dispatch(addTask());
   // dispatch(deleteTask());
   // dispatch(toggleComplete());

   console.log(tasks);
   console.log(filter);
   return (
      <>
         <FilterBar />
         <TaskCard />
      </>
   );
}

export default App;
