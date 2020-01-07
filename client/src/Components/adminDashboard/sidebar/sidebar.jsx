import React from 'react';
import '../../../assets/fontawesome-free/css/all.min.css';
import './css/styles.css';
export default function sidebar() {
    return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark nav-sidebar">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav navbar-nav-dashadmin">
                    <a class="nav-item nav-link active" href="#">
                        <i className="fas fa-home"></i>
                        <span>Dashboard</span>
                    </a>
                    <a class="nav-item nav-link" href="#">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Projects</span>
                    </a>
                    <a class="nav-item nav-link" href="#">
                        <i className="fas fa-chalkboard-teacher"></i>
                        <span>Instructors</span>
                    </a>
                    <a class="nav-item nav-link" href="#">
                        <i className="fas fa-user-graduate"></i>
                        <span>Students</span>
                    </a>
                    </div>
                </div>
            </nav>
    )
}
