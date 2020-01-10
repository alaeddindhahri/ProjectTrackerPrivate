import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PickInstructorCard from './pickInstructorCard';

class assignModal extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Assign an instructor to this Project</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <PickInstructorCard instructors={this.props.authAdmin.instructors} project={this.props.project}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
assignModal.propTypes = {
    authAdmin: PropTypes.object.isRequired,
    // errors:PropTypes.object.isRequired

}
const mapStateToProps=state=>({
    authAdmin: state.authAdmin,
    // errors: state.errors
})
export default connect(mapStateToProps,{})(assignModal);