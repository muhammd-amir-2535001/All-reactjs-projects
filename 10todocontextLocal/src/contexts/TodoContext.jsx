import React, { createContext, useState, useEffect } from 'react';

// Create a new context called TodoContext
const TodoContext = createContext();

// Define the TodoProvider component
function TodoProvider(props) {
    // console.log("------------------>props",props)
   
    // Set up a state variable 'todos' to manage the to-do list
    const [todos, setTodos] = useState([
        {
            id: 1,
            todo: " add todos this ",
            completed: false,
        }
    ]);

    // Function to add a new to-do item
    const addTodo = (todo) => {
        // Create a new to-do item with a unique ID and prepend it to the existing list
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    }

    // Function to update a to-do item by its ID
    const updateTodo = (id, todo) => {
        // Map through the current list of to-dos and update the one with the matching ID
        setTodos((prev) =>
            prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
        );
    }

    // Function to delete a to-do item by its ID
    let deleteTodo = (id) => {
        // Filter out the to-do item with the specified ID
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
    
    // Function to toggle the 'completed' status of a to-do item by its ID
    const toggleComplete = (id) => {
        // Map through the to-dos, toggle the 'completed' status of the item with the matching ID
        setTodos((prev) =>
            prev.map((prevTodo) =>
                prevTodo.id === id
                    ? { ...prevTodo, completed: !prevTodo.completed }
                    : prevTodo
            )
        );
    }

    // Load to-do items from local storage when the component is mounted
    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"));
        if (todos && todos.length > 0) {
            setTodos(todos);
        }
    }, []);

    // Save the to-do items to local storage whenever the 'todos' state changes
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    

    // Provide the 'todos' state and the functions for managing to-do items to child components
    return (
        <TodoContext.Provider
            value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
            {...props}
        >
            {/* Render the children components */}
            </TodoContext.Provider>
    );
  
}

// Export the TodoContext and TodoProvider
export { TodoContext, TodoProvider };
