import React, { useState, useEffect } from 'react';
import { REACT_APP_BACKEND_API_URL, REACT_APP_WEBSITE_TITLE } from '../env';

function App() {
  const [todos, setTodos] = useState([]);
  const apiUrl = `https://${REACT_APP_BACKEND_API_URL}/api/todos`;
  const title = `${REACT_APP_WEBSITE_TITLE} v1`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error("Failed to fetch todos:", err));
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;