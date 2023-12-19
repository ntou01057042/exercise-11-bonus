const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  age: Number,
  grade: String,
});

// Compile model from schema
const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
