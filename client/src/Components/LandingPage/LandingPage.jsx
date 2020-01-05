import React, { Component } from "react";
import "./LandingPage.css";

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="navigationBar col-12">
            <nav className="navbar navbar-light bg-light">
              <a className="navbar-brand col-2 offset-0.5" href="/">
                <img
                  src="https://dcassetcdn.com/design_img/1559024/551167/551167_7840631_1559024_911ff84c_image.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="logo"
                />{" "}
                Project Tracker
              </a>
              <div className="d-flex justify-content-end col-6 navbtns">
                <button type="button" className="btn btn-outline-dark">
                  Sign Up
                </button>
                <button type="button" className="btn btn-outline-success">
                  Login
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div className="row d-flex justify-content-center formRow">
          <div class="col-8 col-xs-4 col-lg-4 form-group formArea">
            <img
              src="https://dcassetcdn.com/design_img/1559024/551167/551167_7840631_1559024_911ff84c_image.png"
              width="150"
              height="150"
              className="d-inline-block align-top"
              alt="logo"
            />
            <h3>Project Tracker</h3>
            <div className="userType">
              <button type="button" class="btn btn-secondary">
                Student
              </button>
              <button type="button" class="btn btn-secondary">
                Instructor
              </button>
            </div>
            <p>Email Address: </p>
            <input type="email" class="form-control" id="emailArea" />
            <p>Password: </p>
            <div className="passwordZone">
              <input type="password" class="form-control " id="passwordArea" />
              <a href="/" className="forgotPassword">
                <p>Forgot Password?</p>
              </a>
            </div>
            <div className="d-flex justify-content-center connectBtns">
              <button type="button" className="btn btn-outline-success">
                Login
              </button>
              <button type="button" className="btn btn-outline-dark">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
