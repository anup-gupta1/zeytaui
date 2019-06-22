import React, { Component } from 'react'
import './common.css';


class NavBar extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between align-items-center navbar-container text-bold">
                <div className="d-flex active-item">
                    <div className="text-2">2</div>
                    <div className="text-rem">gethr</div>
                </div>
                <div className="d-flex right-navbar-container">
                    <div className="right-navbar-item">Home</div>
                    <div className="right-navbar-item">About</div>
                    <div className="right-navbar-item">Contact Us</div>
                </div>
            </div>
        )
    }
}


export default NavBar;