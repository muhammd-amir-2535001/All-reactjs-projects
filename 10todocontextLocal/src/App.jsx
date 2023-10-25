import React, { useContext } from 'react';
import { TodoContext } from './contexts/TodoContext'; // import the TodoContext
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const { todos } = useContext(TodoContext); // use useContext to access the context values


  return (
    <div className="classA">
      <div className="classB">
        <h1 className="classC">
          <b>My Todos List</b>
        </h1>
        <div className="classD">
          <TodoForm />
        </div>
        <div className="classE">
          {/* Loop and Add TodoItem here */}
          {todos.map((todo) => (
            <div key={todo.id} className="classF">
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
