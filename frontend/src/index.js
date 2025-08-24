import express from 'express';
import renderer from './renderer';
import expressLayouts from 'express-ejs-layouts';

const app = express();

app.use(expressLayouts);

const healthCheck = (req, res) => {
  res.status(200).send('OK');
};

app.get('/health', healthCheck);

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.send(renderer(req));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});