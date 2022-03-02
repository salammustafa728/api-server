'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const notFound = require('./handlers/404');
const errorhandler = require('./handlers/500');
const logger = require('./middleware/logger');
const foodRoutes = require('./routes/food');
const clothsRoutes = require('./routes/clothes');

app.use(express.json());
app.use(cors());
app.use(logger);
app.use(foodRoutes);
app.use(clothsRoutes);

function start(port) {
    app.listen(port, () => {
      console.log(`Running on ${port}`);
    });
  }
  
app.get('/', (req, res) => {
  res.send('Home');
});


app.use(errorhandler);
app.use('*',notFound);


module.exports = {
  app: app,
  start: start,
};
