import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';

export default class index extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col top-navbar">
                        <Navbar/>
                    </div>
                </div>
                <div className="row sidebar-content">
                    <div className="col-lg-2 sidebar">
                        <Sidebar/>
                    </div>
                    <div className="col-lg-10 dashboard-content">
                        
                    </div>
                </div>
                <div className="row sticky-footer">
                    <div className="copyright text-center my-auto">
                        <span>Copyright © Project Tracker 2020</span>
                    </div>
                </div>
            </div>
        )
    }
}
