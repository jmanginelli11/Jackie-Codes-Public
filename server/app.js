const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

//LOGGING
app.use(morgan('dev'));

//BODY PARSING
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//STATIC
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./api')) // include our routes!


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}) // Send index.html for any other requests

app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });

module.exports = app;