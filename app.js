const express = require('express');
const app = express();
const PORT = process.env.PORT || 4400;
const data = require('./data');

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Endpoint to return data
app.get('/api/list', (req, res) => {
    res.json(data);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
