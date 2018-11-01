import React, { Component } from 'react';
import logo from "../styling/images/logo.svg";

class Header extends Component {

    render() {
        return (
            <div className="header">
                <img src={logo} className="logo" alt="logo" />
            </div>
        )
    }
}

export default Header;