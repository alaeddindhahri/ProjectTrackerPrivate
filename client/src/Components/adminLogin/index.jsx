import React, { Component } from 'react';
import './css/styles.css';

export default class index extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row login">
                <form className="login-form">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                </div>
                <div className="row sticky-footer">
                    <div className="copyright text-center">
                        <span>Copyright © Project Tracker 2020</span>
                    </div>
                </div>
            </div>
        )
    }
}
