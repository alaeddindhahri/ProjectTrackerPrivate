import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthInstructorToken from "../../utils/setAuthInstructorToken";
import isEmpty from "../../validation/is-empty";
import { Redirect } from "react-router-dom";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../LandingPage/LandingPage.css";

class LoginModal extends React.Component {
  state = {
    userType: "",
    userLogin: { email: "", password: "" },
    currentUser: {},
    isAuthenticatedInstructor: false,
    redirect: null
  };

  handleChangeLogin = e => {
    this.setState({
      userLogin: {
        ...this.state.userLogin,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = () => {
    const Userdata = {
      email: this.state.userLogin.email,
      password: this.state.userLogin.password
    };
    this.loginInstructor(Userdata);
  };

  loginInstructor = instructordata => {
    console.log("hello from login", this.state.userLogin);
    axios
      .post("/api/instructors/login", this.state.userLogin)
      .then(res => {
        console.log("res.data : ", res.data);
        //save to localStorage
        const { token } = res.data;
        //set token to LS
        localStorage.setItem("jwtToken", token);
        //set token to Auth header
        setAuthInstructorToken(token);
        //decode token to get user data
        const decoded = jwt_decode(token);
        //set current admin
        this.setCurrentInstructor(decoded);
      })
      .catch(err => console.log("cant login"));
  };

  //set logged Instructor
  setCurrentInstructor = decoded => {
    this.setState({
      isAuthenticatedInstructor: !isEmpty(decoded),
      currentUser: decoded
    });
  };

  //   componentWillReceiveProps(nextProps) {
  //     console.log("will receive");
  //     if (this.state.isAuthenticatedInstructor) {
  //       //   this.props.history.push("/instructorHome");
  //       window.location.href = "/instructorHome";
  //     }
  //   }

  componentDidUpdate() {
    console.log("will unmount");
    // this.props.getInstructors();
    // this.props.getStudents();
    if (this.state.isAuthenticatedInstructor) {
      //   this.props.history.push(`/instructorHome`);
      // eslint-disable-next-line
      this.setState({
        redirect: "/instructorHome/" + this.state.currentUser.id
      });
      //   + this.state.currentUser.id;
      // }
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
        <ModalHeader toggle={this.toggle}>Login...</ModalHeader>
        <ModalBody className="formArea">
          {/* <div className="formArea"> */}
          <img
            src="https://dcassetcdn.com/design_img/1559024/551167/551167_7840631_1559024_911ff84c_image.png"
            width="150"
            height="150"
            className="d-inline-block align-top"
            alt="logo"
          />
          <h3>Project Tracker</h3>
          <p className="specifyUser">please specify the user type</p>
          <div className="userType">
            <button
              type="button"
              className="btn btn-info"
              onClick={() =>
                this.setState({
                  userType: "Student"
                  //   users: this.props.students
                })
              }
            >
              Student
            </button>
            <button
              type="button"
              className="btn btn-info"
              onClick={() =>
                this.setState({
                  userType: "Instructor"
                  //   users: this.props.instructors
                })
              }
            >
              Instructor
            </button>
          </div>
          <h5 id="welcomeMsg">
            Welcome <span>{this.state.userType}</span>
          </h5>
          <input
            type="email"
            className="form-control"
            id="emailArea"
            placeholder="Email..."
            name="email"
            onChange={this.handleChangeLogin}
          />
          <div className="passwordZone">
            <input
              type="password"
              className="form-control"
              id="passwordArea"
              placeholder="Password..."
              name="password"
              onChange={this.handleChangeLogin}
            />
            <a href="/" className="forgotPassword">
              <p>Forgot Password?</p>
            </a>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              this.handleLogin();
            }}
          >
            Login
          </Button>{" "}
          <Button color="secondary" onClick={this.props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default LoginModal;
