import React from 'react'
import '../../../assets/fontawesome-free/css/all.min.css';
import './css/styles.css';
export default function navbar() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
            <a className="navbar-brand mr-1" href="index.html">Project Tracker</a>
            <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-user-circle fa-fw"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <a className="dropdown-item" href="#">Account</a>
                <a className="dropdown-item" href="#">Logout</a>
                </div>
            </li>
            </ul>
        </nav>
    )
}
