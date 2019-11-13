import React, { Component } from "react";
import logo from "../../imgs/Logo.png";



class HeaderView extends Component {
    render() { 
        return (
            <header>
                <nav className="navbar">
                    <a className="navbar-brand mx-auto" href="#">
                    <img src={logo} width="120" alt="logo"/> 
                    </a>
                </nav>
            </header>
        );
    }
}
 
export default HeaderView;