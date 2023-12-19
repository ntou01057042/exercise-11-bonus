var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Import the mongoose module
const mongoose = require('mongoose');

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set('strictQuery', false);

// Define the database URL to connect to.
const mongoDB = 'mongodb+srv://ntou01057042:lt5AcBuAoa5YRN38@cluster0.p6kdb5s.mongodb.net/?retryWrites=true&w=majority';

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoDB);
}

const studentsRouter = require('./routes/students');

app.use('/students', studentsRouter);

module.exports = app;
