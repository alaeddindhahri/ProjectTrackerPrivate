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
        required:false
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
        required:true
    },
    assignmentDate:{
        type:Date,
        required:false
    },
    confirmationDate:{
        type:Date,
        required:false
    },
    submissionDate:{
        type:Date,
        required:false
    },
    validationDate:{
        type:Date,
        required:false
    }
},{collection:'projects'});

module.exports = Project = mongoose.model('projects',ProjectSchema);