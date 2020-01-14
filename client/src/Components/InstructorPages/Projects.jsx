import React from "react";
import "./Projects.css";
// import { Link } from "react-router-dom";

function Projects(props) {
  return (
    <div className="projectsList">
      {props.projects.map((project, index) => {
        const { name, description, githubLink, idStudent, status } = project;
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
            <p>
              ID Student: <a href="/">{idStudent}</a>
            </p>
            <p>Status: {status}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
