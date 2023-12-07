import { useState } from 'react';
//import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  // Function to handle form submission
  const handleFormSubmit = (todo) => {
    // Handle the submitted todo data
    console.log(todo);
  };

  return (
    <div className="todo-app">
      {/* Pass the handleFormSubmit function as onSubmit prop */}
      <TodoList onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;