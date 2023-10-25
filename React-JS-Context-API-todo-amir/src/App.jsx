import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
function App() {


  return (
    <>
    <div className="todoinputorlist">
    <TodoInput/>
     <TodoList/>
    </div>
    

    </>
  )
}

export default App
