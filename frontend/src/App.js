import React, { useState, useEffect } from 'react';
import { WEBSITE_TITLE } from '../constants';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL || 'https://api.example.com'; // default fallback URL

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setTodos(data);
        console.log("Successfully fetched todos.");
      } catch (error) {
        setFetchError(error);
        console.error("Failed to fetch todos:", error);
      }
    }
    fetchData();
  }, [apiUrl, todos, fetchError]);

  return (
    <div>
      <h1>{WEBSITE_TITLE}</h1>
      {fetchError ? (
        <p>Error fetching todos: {fetchError.message}</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
