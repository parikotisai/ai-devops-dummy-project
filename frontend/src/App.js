// frontend/src/App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch data from our backend
    const apiUrl = process.env.REACT_APP_BACKEND_API_URL;
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error("Failed to fetch todos:", err));
  }, []);

  return (
    <div>
      <h1>My To-Do List1</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;