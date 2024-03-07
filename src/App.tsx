import { Header } from "./components/header/Header";
import { AppBar } from "./components/app-bar/AppBar";
import { TaskForm } from "./components/task-form/TaskForm";
import { Tasks } from "./components/tasks/Tasks";

// import { TaskCard } from "./components/task-card/TaskCard";
// import { FilterBar } from "./components/filter-bar/FilterBar";

// import { useAppSelector } from "./redux/hooks";

function App() {
   // const tasks = useAppSelector(state => state.tasks);
   // const filter = useAppSelector(state => state.filter.status);

   // console.log(tasks);
   // console.log(filter);
   return (
      <>
         <Header />
         <AppBar />
         <TaskForm />
         <Tasks />
         {/* <FilterBar />
         <TaskCard /> */}
      </>
   );
}

export default App;
