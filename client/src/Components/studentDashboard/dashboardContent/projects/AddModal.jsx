import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addProject } from "../../../../actions/projectStudentAction";

class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modifiedproject: ""
    };
  }

  state = {
    modal: false,
    name: "",
    description: "",
    githubLink: "",
    deadline: ""
  };

  handleonchangeProject = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChange = e => {
    this.setState({
      modifiedproject: e.target.value
    });
  };

  toggle = () => this.setState({ modal: !this.state.modal });
  render() {
    return (
      <div className="addProjectmodalbody">
        <Button
          color="outline-danger"
          onClick={this.toggle}
          className="addmodal-btn"
        >
          <p>Add New Project</p>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add New Project</ModalHeader>
          <ModalBody>
            <Input
              type="text"
              name="name"
              placeholder="Enter a Project Name"
              onChange={this.handleonchangeProject}
            />
            <Input
              type="text"
              name="description"
              placeholder="Enter description"
              onChange={this.handleonchangeProject}
            />
            <Input
              type="text"
              name="githubLink"
              placeholder="Enter githubLink"
              onChange={this.handleonchangeProject}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              type="button"
              onClick={() => {
                addProject({
                  id: Date.now(),
                  name: this.state.name,
                  description: this.state.description,
                  githubLink: this.state.githubLink,
                  deadline: this.state.deadline
                });
                this.toggle();
                console.log("pp");
              }}
            >
              Save Changes
            </Button>{" "}
            <Button
              color="secondary"
              data-dismiss="modal"
              onClick={() => {
                this.toggle();
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { addProject })(AddModal);
