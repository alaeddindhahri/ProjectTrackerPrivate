import React, { Component } from 'react'
import ProjectsChart from './charts/projectsChart';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class index extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4 col-xs-12">
                    <ProjectsChart projects={this.props.authStudent.projects}/>
                </div>
            </div>
        )
    }
}
index.propTypes = {
    authStudent: PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired

}
const mapStateToProps=state=>({
    authStudent: state.authStudent,
    errors: state.errors
})
export default connect(mapStateToProps,{})(index);