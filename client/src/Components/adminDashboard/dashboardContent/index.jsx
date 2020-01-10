import React, { Component } from 'react';
import './css/styles.css';
import Account from './account/index'
import Statistics from './statistics/index'
import Instructors from './instructors/index'
import Students from './students/index'
import Projects from './projects/index'
export default class index extends Component {
    renderSwitchSection=()=>{
        switch(this.props.section){
            case 'Account':
                return <Account/>;
            case 'Statistics':
                return <Statistics/>;
            case 'Instructors':
                return <Instructors/>;
            case 'Students':
                return <Students/>;
            case 'Projects':
                return <Projects/>;

        }
    }
    render() {
        return (
            <div className="container-fluid content-container">
                {this.renderSwitchSection()}
            </div>
        )
    }
}
