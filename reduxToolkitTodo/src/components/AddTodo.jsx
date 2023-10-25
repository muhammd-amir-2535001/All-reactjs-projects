import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 
import './Todo.css'; 

function AddTodo() {

    const [input, setInput] = useState('')
    // value ko bajnay k ly useDispatch or ya ek method h
    const dispatch = useDispatch();
    
    const addTodoHandler = (e) => {
        e.preventDefault();
        //ya mayra bag h
        // dispatch(addTodo(input))
        
       // Check if the input is not empty before adding the todo
        if (input.trim() !== '') {
          dispatch(addTodo(input));
          setInput('');
        }

    };
      
    return (
      <form onSubmit={addTodoHandler} className="todo-form">
        <input
          type="text"
          className="todo-input" 
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="todo-button"
        >
          Add Todo
        </button>
      </form>
    );
  }

export default AddTodo




