import React, { Component } from "react";
import emaillogo from "../../imgs/email_icon.svg";
import githublogo from "../../imgs/github_icon.svg";

class FooterView extends Component {
  state = {};
  render() {
    return (
      <div>
        <footer>
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
                <a href="mailto: plantpharmacy.app@gmail.com" target="_blank">
                  <img src={emaillogo} width="42" alt="email" />
                </a>
              </div>
              <p className="copyright">© PlantPharmacy 2020 </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default FooterView;
