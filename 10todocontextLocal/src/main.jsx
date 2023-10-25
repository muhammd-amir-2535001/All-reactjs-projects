import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { TodoProvider } from './contexts/TodoContext'; // import the TodoProvider
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <TodoProvider> { /* wrap your root component with the provider} */}
      <App/>
    </TodoProvider>
  </React.StrictMode>
);
