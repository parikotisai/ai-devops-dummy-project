import React, { useState, useEffect } from 'react';
import { WEBSITE_TITLE } from '../constants';

function App() {
  const [todos, setTodos] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setTodos(data);
        console.log("Successfully fetched todos.");
      })
      .catch(err => {
        console.error("Failed to fetch todos:", err);
      });
  }, [apiUrl]);

  return (
    <div>
      <h1>{WEBSITE_TITLE}</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;