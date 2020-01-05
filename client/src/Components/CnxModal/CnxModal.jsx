import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../LandingPage/LandingPage.css";

class CnxModal extends React.Component {
  render() {
    return (
      // <Modal
      // isOpen={this.props.modal}
      // toggle={this.props.toggle}
      //   className="col-10"
      // >
      <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
        <ModalHeader toggle={this.toggle}>{this.props.type}</ModalHeader>
        <ModalBody>
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
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.toggle}>
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
