import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


 class index extends Component {
    render() {
        return (
            <div className="row ml-1">
                {this.props.authAdmin.students.map((student,key)=>
                <div key={key} className="col-lg-3 col-xs-12 mt-4">
                        <div className={student.isActive?"card":"card text-white bg-secondary mb-3"}>
                            <h5 className="card-header" style={{"backgroundColor":student.isActive?null:"gray"}}>{student.firstName} {student.lastName}</h5>
                            <div className="card-body">
                                <p className="card-text">Email: {student.email}</p>
                                <p className="card-text">Phone Number: {student.phoneNumber}</p>
                                <a href="" className="btn btn-primary">View</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
index.propTypes = {
    authAdmin: PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired

}
const mapStateToProps=state=>({
    authAdmin: state.authAdmin,
    errors: state.errors
})
export default connect(mapStateToProps,{})(index);