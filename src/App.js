import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="App">
      <AddTodo></AddTodo>
      <Todos></Todos>
    </div>
  );
}

export default App;
