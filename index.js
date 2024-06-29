
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Calculator App: Use /add, /subtract, /multiply, /divide');
});

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const result = parseFloat(a) + parseFloat(b);
  res.send(`Result: ${result}`);
});

app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  const result = parseFloat(a) - parseFloat(b);
  res.send(`Result: ${result}`);
});

app.get('/multiply', (req, res) => {
  const { a, b } = req.query;
  const result = parseFloat(a) * parseFloat(b);
  res.send(`Result: ${result}`);
});

app.get('/divide', (req, res) => {
  const { a, b } = req.query;
  const result = parseFloat(a) / parseFloat(b);
  res.send(`Result: ${result}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
