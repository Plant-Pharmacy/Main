import React, { Component } from "react";
import logo from "../../imgs/Logo.png";
import githublogo from "../../imgs/email_icon.svg";
import emaillogo from "../../imgs/github_icon.svg";

class HeaderView extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="navWrapper">
              <div className="desktopBrand">
                <a className="navbar-brand mx-auto" href="#">
                  <img src={logo} width="120" alt="logo" />
                </a>
              </div>
              <div className="desktopFooter">
                <div className="container">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div>
                      <a href="https://github.com/Plant-Pharmacy/Main">
                        <img
                          className="githublogo"
                          src={githublogo}
                          width="42"
                          alt="github"
                        />
                      </a>
                      <a href="mailto: plantpharmacy@gmail.com">
                        <img src={emaillogo} width="42" alt="email" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default HeaderView;
