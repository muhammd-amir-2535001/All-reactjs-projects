 
import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid"; // unique IDs bana k liye

// Reducer function to manage the state of todos
function todoReducer(todos, action) {
  switch (action.type) {
    // Action for adding a new todo
    case "ADD":
      return [...todos, { id: uuidv4(), text: action.payload, completed: false }];
    // Action for deleting a todo
    case "DELETE":
      return todos.filter((item) => item.id !== action.payload);
    // Action for editing a todo
    case "EDIT":
      return todos.map((item) =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.text }
          : item
      );
    default:
      break;
  }
}

function App() {
  // Managing todos state with useReducer
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    // Initialize todos from local storage or use an empty array
    const localValue = JSON.parse(localStorage.getItem("TODOS"));
    return localValue ? localValue : [];
  });

  // State for input field for adding new todos
  const [newTodo, setNewTodo] = useState("");
  
  // State to track if editing mode is active
  const [isEdit, setIsEdit] = useState(null);

  // Saving todos to local storage when they change
  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo();
  };

  // Adding or editing a todo item
  const handleAddTodo = () => {
    if (!newTodo.trim()) return;
    if (isEdit) {
      dispatch({ type: "EDIT", payload: { id: isEdit.id, text: newTodo } });
      setIsEdit(null);
    } else {
      dispatch({ type: "ADD", payload: newTodo });
      setNewTodo("");
    }
    setNewTodo("");
  };
  // Deleting a todo
  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  // Starting to edit a todo
  const handleEdit = (item) => {
    setNewTodo(item.text);
    setIsEdit(item);
  };

  // Rendering the user interface
  return (
    <form onSubmit={handleSubmit} className="myform">
      <div className="mydiv">
        {/* Input field for adding new todos */}
        <input
          className="myinput "
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter your task...."
        />
        <span
          onClick={handleAddTodo}
          className="myspan"
        >
          {isEdit ? "Save" : "Add"}
        </span>
      </div>

      {/* List of todos */}
      <ul className="myul">
        {todos.length <= 0 && (
          <div className="myc">
            There is No todo task here...
          </div>
        )}

        {todos.map((item) => (
          <li
            key={item.id}
            className="myd"
          >
            <div className="mye">
            
              {/* Displaying the todo text */}
              <span
                className={`${item.completed ? "myg" : ""} myh`}
              >
                {item.text}
              </span>
            </div>

            <div className="myi">
              {/* Delete and Edit buttons */}
              <span
                onClick={() => handleDelete(item.id)}
                className="myj"
              >
                <div >Delete</div>
              </span>
              <span
                onClick={() => handleEdit(item)}
                className="myk"
              >
                <div className='myj'>Edit</div>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </form>
  );
}

export default App;
