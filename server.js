const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/stats', require('./routes/stats'));

// Start server
const PORT = process.env.PORT || 8040;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
