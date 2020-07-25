// node_modules
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const usersRoute = require('./routes/users');
const cellphonesRoute = require('./routes/cellphones');
const chipsRoute = require('./routes/chips');

// environment
require('dotenv/config');

// create the express app
const app = express();

// BODY PARSER (Parse the body of the request)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// morgan (show the http requests)
app.use(morgan('dev'));

// --->cors
app.use(cors());

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

// Middlewares (Import Routes)
app.use('/users', usersRoute);
app.use('/cellphones', cellphonesRoute);
app.use('/chips', chipsRoute);


// ROUTES
app.get('/', (req, res) => {
  res.send('We are on home!!');
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  console.log('connected to DB!')
);

app.listen(process.env.PORT || 3000, '0.0.0.0', function() {
  console.log("Server started.......");
});