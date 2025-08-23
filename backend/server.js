require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const API_SECRET = process.env.API_SECRET;
const DB_USER = process.env.DB_USER;
console.log("DB User:", DB_USER);
app.get('/api/todos', (req, res) => {
  console.log("Secret Used:", process.env.API_SECRET);
  res.json([
    { id: 1, text: 'Setup AI DevOps Agent' },
    { id: 2, text: 'Deploy automatically' }
  ]);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));