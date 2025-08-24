const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const winston = require('winston');

const app = express();
app.use(cors());
app.use(morgan('combined'));

let logger;

try {
  logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
    ],
  });
} catch (err) {
  console.error('Error creating logger: ', err);
  process.exit(1);
}

app.get('/api/todos', (req, res) => {
  try {
    logger.info('Todos API called');
    res.json([
      { id: 1, text: 'Setup AI DevOps Agent' },
      { id: 2, text: 'Deploy automatically' },
    ]);
  } catch (err) {
    logger.error(`Error while fetching todos: ${err}`);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server is up and running' });
});

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});