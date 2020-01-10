const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const ProjectSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    githubLink:{
        type:String,
    },
    idStudent:{
        type:String,
        required:true
    },
    idInstructor:{
        type:String,
    },
    creationDate:{
        type:Date,
        required:true
    },
    deadline:{
        type:Date,
    },
    assignmentDate:{
        type:Date,
    },
    confirmationDate:{
        type:Date,
    },
    submissionDate:{
        type:Date,
    },
    validationDate:{
        type:Date,
    }
},{collection:'projects'});

module.exports = Project = mongoose.model('projects',ProjectSchema);