const express = require("express");
const router = express.Router();

//load project model
const Project = require("../../models/Project");


// @Api : get api/project
// @desc : Get All Project
// @access : public
Router.get("/", (req, res) => {
    Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.send("error"));
});

// @Api : get one /api/project
// @desc : Get project by ID
// @access : public
Router.get("/:_id", (req, res) => {
  const { _id } = req.params;
  Project.findOne({ _id })
    .then(project => res.json(project))
    .catch(err => res.send("error"));
});

// @Api : POST /api/project
// @desc : Create new project
// @access : public
Router.post("/", (req, res) => {
  const { name, description, status, githubLink, creationDate, deadline } = req.body;

  const newProject = new Project({ name, description, status, githubLink, creationDate, deadline });
  newProject
    .save()
    .then(project => res.json(project))
    .catch(err => res.send("error"));
});

// @Api : DELETE /api/project
// @desc : Delete project
// @access : public
Router.delete("/:_id", (req, res) => {
  const { _id } = req.params;
  Project.findOneAndDelete({ _id })
    .then(project => res.send("success"))
    .catch(err => res.send("error"));
});

// @Api : PUT /api/project
// @desc : Update project
// @access : public
Router.put("/:_id", (req, res) => {
  const { _id } = req.params;
  const { name, description, githubLink } = req.body;
  console.log(_id)
  console.log(req.body)
  Project.findOneAndUpdate({ _id }, { $set: { name, description, githubLink } })
    .then(project => res.json(project))
    .catch(err => res.send("error"));
});

module.exports = router;
