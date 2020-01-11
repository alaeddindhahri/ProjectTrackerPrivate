import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../LandingPage/LandingPage.css";
import axios from "axios";

class CnxModal extends React.Component {
  state = {
    userType: "",
    newInstructor: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      phoneNumber: "",
      birthDate: "",
      isActive: false
    }
  };
  addInstructor = newInstructor => {
    axios
      .post("/api/instructors/registerinstructor", newInstructor)
      .then(console.log("Instructor added Successfully"));
  };

  handleChange = e => {
    this.setState({
      newInstructor: {
        ...this.state.newInstructor,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      // <Modal
      // isOpen={this.props.modal}
      // toggle={this.props.toggle}
      //   className="col-10"
      // >
      <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
        <ModalHeader toggle={this.toggle}>{this.props.type}</ModalHeader>
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
          <div className="userType">
            <button
              type="button"
              className="btn btn-info"
              onClick={() => this.setState({ userType: "Student" })}
            >
              Student
            </button>
            <button
              type="button"
              className="btn btn-info"
              onClick={() => this.setState({ userType: "Instructor" })}
            >
              Instructor
            </button>
          </div>
          <h5 id="welcomeMsg">
            Welcome <span>{this.state.userType}</span>
          </h5>
          {this.props.type === "Login" ? (
            <>
              <input
                type="email"
                className="form-control"
                id="emailArea"
                placeholder="Email..."
              />
              <div className="passwordZone">
                <input
                  type="password"
                  className="form-control "
                  id="passwordArea"
                  placeholder="Password..."
                />
                <a href="/" className="forgotPassword">
                  <p>Forgot Password?</p>
                </a>
              </div>
            </>
          ) : (
            <></>
          )}
          {this.props.type === "Sign Up" ? (
            <>
              <input
                type="text"
                className="form-control"
                placeholder="First Name..."
                name="firstName"
                onChange={this.handleChange}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Last Name..."
                name="lastName"
                onChange={this.handleChange}
              />
              <input
                type="email"
                className="form-control"
                placeholder="Email..."
                name="email"
                onChange={this.handleChange}
              />
              <input
                type="text"
                className="form-control"
                placeholder="UserName..."
                name="username"
                onChange={this.handleChange}
              />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
              />
              <input
                type="text"
                className="form-control"
                placeholder="PhoneNumber..."
                name="phoneNumber"
                onChange={this.handleChange}
              />
              <p>Birth date: </p>
              <input
                className="form-control"
                type="date"
                id="example-date-input"
                name="birthDate"
                onChange={this.handleChange}
              ></input>
            </>
          ) : (
            <></>
          )}
          {/* </div> */}
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              this.props.toggle();
              this.addInstructor(this.state.newInstructor);
            }}
          >
            {this.props.type}
          </Button>{" "}
          <Button color="secondary" onClick={this.props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default CnxModal;
