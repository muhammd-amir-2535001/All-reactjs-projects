import React, { useState,useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'; // import the TodoContext
import './todo.css'

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
   // use useContext to access the context values
  const { updateTodo, deleteTodo, toggleComplete } = useContext(TodoContext); 
 

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }
  const toggleCompleted = () => {
    //console.log(todo.id);
    toggleComplete(todo.id)
  }

  return (
      <div
          className={`classG ${
              todo.completed ? "classH" : "classI"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={toggleCompleted}
          />
          <input
              type="text"
              className={`classJ${
                  isTodoEditable ? "classOne" : "classTwo"
              } ${todo.completed ? "line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
          />
          {/* Edit, Save Button */}
          <button
              className="classbtn"
              onClick={() => {
                  if (todo.completed) return;

                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {isTodoEditable ? "Save" : "Eidt"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="classbtnTwo"
              onClick={() => deleteTodo(todo.id)}
          >
              Delete
          </button>
      </div>
  );
}

export default TodoItem;