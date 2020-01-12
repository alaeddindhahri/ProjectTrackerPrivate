import React from "react";
import { Button, Modal, ModalHeader, ModalFooter, Input } from "reactstrap";
import { connect } from "react-redux";
import {updateProject} from '../../../../actions/projectStudentAction';

  class EditModal extends React.Component {

  
    updateProject = () =>
    axios.put(`/api/projects?projectId=${this.props.match.params.id}`
      )
      .then(res =>
        this.setState({
          Details: res.data
        })
      );
      
    handleChange = e =>
    setProject({ ...project, [e.target.name]: e.target.value });
  
    toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    };
  
  render() {
    return (
      <div>
        <Button onClick={this.toggle} className="edit-btn">
          Edit
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Edit Project</ModalHeader>
          <Input
        type="text"
        name="name"
        placeholder="name"
        value={project.name}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="Description"
        value={project.description}
        placeholder="description"
        onChange={handleChange}
      />
      <Input
        type="text"
        name="Github Link"
        placeholder="Github Link"
        onChange={handleChange}
        value={project.githubLink}
      />
          <ModalFooter className="btneditx">
          <Button
        onClick={() => {
          updateProject(props.project._id);
        }}
      >
        Save changes
      </Button>
            <Button className="btn btn-danger" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { updateProject })(EditModal);
