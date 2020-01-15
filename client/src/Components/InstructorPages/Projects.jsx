import React from "react";
import "./Projects.css";
import axios from "axios";
// import { Link } from "react-router-dom";

const handlevalidate = id => {
  axios
    .put(`/api/instructors/updateProject/${id}`, {
      status: "validated"
    })
    .then(response => {
      console.log("validated successfully or maybe not");
    });
};

function Projects(props) {
  return (
    <div className="projectsList">
      {props.projects.map((project, index) => {
        const { _id, name, description, githubLink, status } = project;
        return (
          <div className="card" key={index}>
            <img
              src="https://files.realpython.com/media/13-Python-Projects-for-Intermediate-Developers_Watermarked.bb98d44bdb10.jpg"
              alt="projectImg"
              className="projectImg"
            />
            <h3>{name}</h3>
            <h4>{githubLink}</h4>
            <p>{description}</p>
            <p className="status-area">Status: {status}</p>
            <button
              href=""
              onClick={() => handlevalidate(_id)}
              type="button"
              class="btn btn-success validate-btn"
            >
              Validate
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
