import React from "react";
import { Progress } from "reactstrap";

function Dashboard(props) {
  return (
    <div>
      {props.projects.map((project, index) => (
        <div key={index}>
          <p className="projectName">{project.name}</p>
          <Progress
            striped
            color="success"
            value={project.status === "created" ? "25" : "50"}
            className="progressBar"
          />
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
