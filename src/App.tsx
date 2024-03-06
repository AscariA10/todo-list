import { TaskCard } from "./components/task-card/TaskCard";
import { FilterBar } from "./components/filter-bar/FilterBar";

import { useAppSelector, useAppDispatch } from "./redux/selectors";

import { addTask, deleteTask, toggleComplete } from "./redux/tasks-slice";

function App() {
   const tasks = useAppSelector(state => state.tasks);
   const dispatch = useAppDispatch();
   dispatch(addTask());
   dispatch(deleteTask());
   dispatch(toggleComplete());

   console.log(tasks);
   return (
      <>
         <FilterBar />
         <TaskCard />
      </>
   );
}

export default App;
