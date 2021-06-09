// imports
const express = require('express');
const routes = require('./routes');

const port = process.env.PORT || 4000;
const app = express();

// TODO: middleware - CORS

// middleware - JSON parsing
// app.use(express.json());

// middleware - API routes
app.use('/api/v1/games', routes.games);

// listen
app.listen(port, () => console.log(`Server is running on port ${port}`));
