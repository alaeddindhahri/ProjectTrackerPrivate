const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const Instructor = require("../../models/Instructor");

// get instructors
router.get("/getInstructors", (req, res) => {
  Instructor.find()
    .then(instructors => res.json(instructors))
    .catch(err => res.send("cannot get"));
});

// Instructor Resigtration
router.post("/registerinstructor", (req, res) => {
  const newInstructor = new Instructor({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    birthDate: req.body.birthDate,
    isActive: req.body.isActive
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newInstructor.password, salt, (err, hash) => {
      if (err) throw err;
      newInstructor.password = hash;
      newInstructor
        .save()
        .then(instructors => res.json(instructors))
        .catch(err => console.log(err));
    });
  });
});

module.exports = router;
