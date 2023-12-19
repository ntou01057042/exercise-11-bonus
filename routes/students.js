const express = require('express');
const router = express.Router();

const Student = require('../models/student');

// find all students
router.get('/', async function (req, res) {
  try {
    res.status(200).json(await Student.find());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// insert a new student
router.post('/', async function (req, res) {
  try {
    const newStudent = new Student({
      name: req.body.name,
      age: req.body.age,
      grade: req.body.grade,
    });
    res.status(201).json(await newStudent.save());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// find a matching student and remove it
router.delete('/:id', async function (req, res) {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// find a matching student and update it
router.put('/:id', async function (req, res) {
  try {
    res.status(200).json(await Student.findByIdAndUpdate(req.params.id, req.body, { new: true }));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
