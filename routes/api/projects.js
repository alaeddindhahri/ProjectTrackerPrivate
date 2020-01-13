const express = require("express");
const router = express.Router();

//load project model
const Project = require("../../models/Project");

// @Api : get api/project
// @desc : Get All Project
// @access : public
router.get("/getAllProjects", (req, res) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.send("error"));
});

// @Api : get one /api/project
// @desc : Get project by ID
// @access : public
router.get("/getOneProject/:_id", (req, res) => {
  const { _id } = req.params;
  Project.findOne({ _id })
    .then(project => res.json(project))
    .catch(err => res.send("error"));
});

// @Api : POST /api/project
// @desc : Create new project
// @access : public
router.post("/createProject", (req, res) => {
  const {
    name,
    description,
    status,
    githubLink,
    creationDate,
    deadline
  } = req.body;

  const newProject = new Project({
    name,
    description,
    status,
    githubLink,
    creationDate,
    deadline
  });
  newProject
    .save()
    .then(project => res.json(project))
    .catch(err => res.send("error"));
});

// @Api : DELETE /api/project
// @desc : Delete project
// @access : public
router.delete("/deleteProject/:_id", (req, res) => {
  const { _id } = req.params;
  Project.findOneAndDelete({ _id })
    .then(project => res.send("success"))
    .catch(err => res.send("error"));
});

// @Api : PUT /api/project
// @desc : Update project
// @access : public
router.put("/updateProject/:_id", (req, res) => {
  const { _id } = req.params;
  const modifiedField = req.body;
  console.log(_id);
  console.log(req.body);
  Project.findOneAndUpdate({ _id }, { $set: { ...modifiedField } })
    .then(project => res.json(project))
    .catch(err => res.send("error"));
});

module.exports = router;
