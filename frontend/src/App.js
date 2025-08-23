// frontend/src/App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch data from our backend
    fetch('http://localhost:8080/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error("Failed to fetch todos:", err));
  }, []);

  return (
    <div>
      <h1>My To-Do List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;