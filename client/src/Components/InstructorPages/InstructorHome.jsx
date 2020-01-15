import React, { Component } from "react";
import "./InstructorHome.css";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import Projects from "./Projects";
// import Dashboard from "./Dashboard";
import Account from "./Account";

export class InstructorHome extends Component {
  state = {
    page: "Projects",
    userData: {},
    userProjects: [],
    students: [
      {
        firstName: "student",
        lastName: "student",
        email: "student@gmail.com",
        username: "student",
        password: "student",
        phoneNumber: "98000000",
        birthDate: "1999-12-31T23:00:00.000+00:00",
        isActive: true
      },
      {
        firstName: "student",
        lastName: "student",
        email: "student@gmail.com",
        username: "student",
        password: "student",
        phoneNumber: "98000000",
        birthDate: "1999-12-31T23:00:00.000+00:00",
        isActive: true
      },
      {
        firstName: "student",
        lastName: "student",
        email: "student@gmail.com",
        username: "student",
        password: "student",
        phoneNumber: "98000000",
        birthDate: "1999-12-31T23:00:00.000+00:00",
        isActive: true
      },
      {
        firstName: "student",
        lastName: "student",
        email: "student@gmail.com",
        username: "student",
        password: "student",
        phoneNumber: "98000000",
        birthDate: "1999-12-31T23:00:00.000+00:00",
        isActive: true
      }
    ],
    projects: [
      {
        name: "project 1",
        description: "description",
        status: "created",
        githubLink: "http://github.com/",
        idStudent: "123",
        idInstructor: "321",
        creationDate: "2019-12-31T23:00:00.000+00:00",
        deadline: "2020-01-01T23:00:00.000+00:00",
        assignmentDate: "2020-01-01T23:00:00.000+00:00",
        confirmationDate: "2020-01-02T23:00:00.000+00:00",
        submissionDate: "2020-01-28T23:00:00.000+00:00",
        validationDate: "2020-01-30T23:00:00.000+00:00"
      },
      {
        name: "project 2",
        description: "description",
        status: "bot",
        githubLink: "http://github.com/",
        idStudent: "123",
        idInstructor: "321",
        creationDate: "2019-12-31T23:00:00.000+00:00",
        deadline: "2020-01-01T23:00:00.000+00:00",
        assignmentDate: "2020-01-01T23:00:00.000+00:00",
        confirmationDate: "2020-01-02T23:00:00.000+00:00",
        submissionDate: "2020-01-28T23:00:00.000+00:00",
        validationDate: "2020-01-30T23:00:00.000+00:00"
      },
      {
        name: "project 3",
        description: "description",
        status: "created",
        githubLink: "http://github.com/",
        idStudent: "123",
        idInstructor: "321",
        creationDate: "2019-12-31T23:00:00.000+00:00",
        deadline: "2020-01-01T23:00:00.000+00:00",
        assignmentDate: "2020-01-01T23:00:00.000+00:00",
        confirmationDate: "2020-01-02T23:00:00.000+00:00",
        submissionDate: "2020-01-28T23:00:00.000+00:00",
        validationDate: "2020-01-30T23:00:00.000+00:00"
      },
      {
        name: "project 4",
        description: "description",
        status: "created",
        githubLink: "http://github.com/",
        idStudent: "123",
        idInstructor: "321",
        creationDate: "2019-12-31T23:00:00.000+00:00",
        deadline: "2020-01-01T23:00:00.000+00:00",
        assignmentDate: "2020-01-01T23:00:00.000+00:00",
        confirmationDate: "2020-01-02T23:00:00.000+00:00",
        submissionDate: "2020-01-28T23:00:00.000+00:00",
        validationDate: "2020-01-30T23:00:00.000+00:00"
      }
    ]
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    axios
      .get(`/api/instructors/getoneinstructor/${this.props.match.params.id}`)
      .then(response => this.setState({ userData: response.data }));
    axios
      .get(`/api/instructors/getProjects/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ userProjects: response.data });
        console.log("helo");
      });
  }

  handleLogOut = () => {
    localStorage.removeItem("jwtToken");
    window.location.href = "http://localhost:3000";
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <button
            type="button"
            class="btn btn-danger logout-btn "
            onClick={() => this.handleLogOut()}
          >
            Log Out
          </button>
          <h3 style={{ color: "white" }}>
            Welcome {this.state.userData.username}
          </h3>
        </nav>
        <div className="sidenav">
          {/* eslint-disable-next-line */}
          <a href="#" onClick={() => this.setState({ page: "Projects" })}>
            Projects
          </a>
          {/* eslint-disable-next-line */}
          <a href="#" onClick={() => this.setState({ page: "Account" })}>
            Account
          </a>
        </div>
        <div className="main">
          {this.state.page === "Projects" ? (
            this.state.userProjects.length !== 0 ? (
              <Projects projects={this.state.userProjects} />
            ) : (
              <h1>No Projects assigned yet...</h1>
            )
          ) : (
            <Account userData={this.state.userData} />
          )}
        </div>
      </div>
    );
  }
}

export default InstructorHome;
