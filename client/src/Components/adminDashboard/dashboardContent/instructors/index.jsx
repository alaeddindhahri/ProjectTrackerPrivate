import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


 class index extends Component {
    render() {
        return (
            <div className="row">
                {this.props.authAdmin.instructors.map((instructor,key)=>
                <div key={key} className="col-lg-3 col-xs-12 mt-4">
                        <div className={instructor.isActive?"card":"card text-white bg-secondary mb-3"}>
                            <h5 className="card-header">{instructor.firstName} {instructor.lastName}</h5>
                            <div className="card-body">
                                <p className="card-text">Email: {instructor.email}</p>
                                <p className="card-text">Phone Number: {instructor.phoneNumber}</p>
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