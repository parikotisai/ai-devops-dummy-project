import React, { useState, useEffect } from 'react';
import { Logger } from 'winston';
import express from 'express';
import { format } from 'morgan';
import { createLogger } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [
    new winston.transports.Console(),
  ],
});

function App() {
  const [todos, setTodos] = useState([]);
  const apiUrl = 'https://example.com/api/todos';
  const title = 'Website Title v1';

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setTodos(data);
        logger.info(`Finished fetching todos from ${apiUrl}`);
      })
      .catch(err => {
        logger.error(`Failed to fetch todos from ${apiUrl}`, err);
      });
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

const HEALTH_CHECK_ENDPOINT = '/health';
const healthCheck = async (req, res) => {
  res.status(200).send({ message: 'Server is running!' });
};

const app = express();
app.use('/', express.static('public'));
app.get(HEALTH_CHECK_ENDPOINT, healthCheck);

app.use(logger('combine')); // print all requests to the console

export default App;