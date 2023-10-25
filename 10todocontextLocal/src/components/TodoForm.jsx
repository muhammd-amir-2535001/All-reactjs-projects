import React, { useContext ,useState} from 'react';
import { TodoContext } from '../contexts/TodoContext'; // import the TodoContext
import "../App.css"

function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useContext(TodoContext); // use useContext to access the context values


    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }

  return (
      <form onSubmit={add}  className="flex">
          <input
              
              type="text"
              placeholder="Write Todo......."
              className="inputOne"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="classAdd">
              Add
          </button>
      </form>
  );
}

export default TodoForm;