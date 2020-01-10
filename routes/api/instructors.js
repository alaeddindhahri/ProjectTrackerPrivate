const express = require("express");
const router = express.Router();

const Instructor = require("../../models/Instructor");

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
  console.log(newInstructor);
  newInstructor
    .save()
    .then(instructors => res.json(instructors))
    .catch(err => res.send("cannot post"));
});

module.exports = router;
