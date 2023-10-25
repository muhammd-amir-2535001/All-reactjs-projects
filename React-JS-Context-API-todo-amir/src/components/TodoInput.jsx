import React from 'react'
import "./todo-item.css";

function TodoInput() {
  return (
    <>
    <div> 
      input todo
      <input 
            className="mainInput"
            type="text"
            placeholder="add your todo lidt.."
            
       />
       <button className="btnaddtodo">
         Add TODO
       </button>
    </div>
    </>
  )
}

export default TodoInput
