const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const PORT = 3000;

const errorHandler = require('./handlers/error');
const ideaRoutes = require('./routes/ideas');

// App Configurations
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/api/ideas', ideaRoutes);

// Page not found
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(errorHandler);

app.listen(PORT, function() {
  console.log(`Serving idea board app on port ${PORT}`);
});
