import React from 'react';
import '../../../assets/fontawesome-free/css/all.min.css';
import './css/styles.css';
export default function sidebar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-sidebar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav navbar-nav-dashadmin">
                    <a className="nav-item nav-link active" href="#1">
                        <i className="fas fa-home"></i>
                        <span>Dashboard</span>
                    </a>
                    <a className="nav-item nav-link" href="#1">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Projects</span>
                    </a>
                    <a className="nav-item nav-link" href="#1">
                        <i className="fas fa-chalkboard-teacher"></i>
                        <span>Instructors</span>
                    </a>
                    <a className="nav-item nav-link" href="#1">
                        <i className="fas fa-user-graduate"></i>
                        <span>Students</span>
                    </a>
                    </div>
                </div>
            </nav>
    )
}
