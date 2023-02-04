require('dotenv').config();

const express = require('express');
const cors = require('cors');
const foodRouter = require('./routes/food.route');

const app = express();

// Mounts the specified middleware function or functions at the specified path:
// the middleware function is executed when the base of the requested path matches path.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/food', foodRouter);

app.get('/asd', (req, res) => {
  res.send('yes').end();
});

const port = process.env.port || 4040;
const server = app.listen(port, console.log(`App listening in port ${port}`));

module.exports = { app, server };
