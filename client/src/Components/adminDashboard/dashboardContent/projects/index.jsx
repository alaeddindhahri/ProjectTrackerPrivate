import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AssignModal from "./assignModal";

class index extends Component {
  state = {
    isOpen: false
  };
  toggleIsOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    console.log("toggled modal");
  };
  render() {
    return (
      <div className="row">
        {this.props.authAdmin.projects.map((project, key) => (
          <div key={key} className="col-lg-3 col-xs-12 mt-4">
            <div
              className={
                project.idInstructor
                  ? "card"
                  : "card text-white bg-secondary mb-3"
              }
            >
              <h5 className="card-header">{project.name}</h5>
              <div className="card-body">
                <p className="card-text">{project.description}</p>
                {/* eslint-disable-next-line */}
                <a
                  href=""
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  View
                </a>
                <AssignModal id="#exampleModal" project={project} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
index.propTypes = {
  authAdmin: PropTypes.object.isRequired
  // errors:PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  authAdmin: state.authAdmin
  // errors: state.errors
});
export default connect(mapStateToProps, {})(index);
