import { Header } from "./components/header/Header";
import { AppBar } from "./components/app-bar/AppBar";

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
         {/* <FilterBar />
         <TaskCard /> */}
      </>
   );
}

export default App;
