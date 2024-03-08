import { Header } from "./components/header/Header";
import { AppBar } from "./components/app-bar/AppBar";
import { TaskForm } from "./components/task-form/TaskForm";
import { Tasks } from "./components/tasks/Tasks";

function App() {
   return (
      <>
         <Header />
         <AppBar />
         <TaskForm />
         <Tasks />
      </>
   );
}

export default App;
