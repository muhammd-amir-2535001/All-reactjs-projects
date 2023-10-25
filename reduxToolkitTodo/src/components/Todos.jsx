import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, editTodo } from '../features/todo/todoSlice';
import './Todo.css'; 

function Todos() {
  //value ko lanye k ly useSelector
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editedText, setEditedText] = useState(''); // State for edited text
  const [editItemId, setEditItemId] = useState(null); // State for tracking which item is being edited

  const handleEditClick = (id) => {
    // Save the current text to the state and set the editItemId
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditedText(todoToEdit.text);
    setEditItemId(id);
  };

  const handleSaveEdit = () => {
    if (editItemId !== null) {
      // Dispatch the editTodo action with the updated text and id
      dispatch(editTodo({ id: editItemId, newText: editedText }));
      setEditItemId(null); // Reset editItemId
    }
  };

  return (
    <>
      
      <ul className="list-none">
        {todos.map((todo) => (
          <li
  
       className="custom-list-item"
            key={todo.id}
          >
            {editItemId === todo.id ? (
              <input
              className='edit-input'
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              ) : (
              <div className="text-white">{todo.text}</div>)
              }
            <div>
              {editItemId === todo.id ? (
                <button
                  onClick={handleSaveEdit}
                  className="action-button"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEditClick(todo.id)}
                  className="action-button"
                >
                  Edit
                </button>
              )}
           <button
             onClick={() => dispatch(removeTodo(todo.id))}
                 className="custom-button" // Apply the custom-button class
                 >
                Delete
             </button>

            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
