// imports
const express = require('express');
const gamesController = require('./controllers/gamesController');

const port = process.env.PORT || 4000;
const app = express();

// middleware
// TODO: add CORS

// TODO: Add json parsing to get the form data
// app.use(express.json());

// API routes
app.use('/api/games', gamesController);

// listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
