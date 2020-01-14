import React, { Component } from "react";
import "./InstructorHome.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Projects from "./Projects";
import Dashboard from "./Dashboard";
import Account from "./Account";

export class InstructorHome extends Component {
  state = {
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
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <h3 style={{ color: "white" }}>Welcome User</h3>
        </nav>
        <div className="sidenav">
          <a href="/">Dashboard</a>
          <a href="/projects">Projects</a>
          <a href="/account">Account</a>
        </div>
        <div className="main">
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path="/"
                component={() => <Dashboard projects={this.state.projects} />}
              />
              <Route
                path="/projects"
                component={() => <Projects projects={this.state.projects} />}
              />
              <Route path="/account" component={() => <Account />} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default InstructorHome;
