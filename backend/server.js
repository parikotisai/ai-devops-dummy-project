require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const dbUser = process.env.DB_USER;
const apiSecret = process.env.API_SECRET;
const port = process.env.PORT || 8080;

console.log("DB User:", dbUser);
console.log("API Secret:", apiSecret);

app.get('/api/todos', (req, res) => {
  console.log("Secret Used:", apiSecret);
  res.json([
    { id: 1, text: 'Setup AI DevOps Agent' },
    { id: 2, text: 'Deploy automatically' }
  ]);
});

app.listen(port, () => console.log(`Server running on port ${port}`));