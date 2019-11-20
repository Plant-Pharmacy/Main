import React, { Component } from "react";
import UploadView from "./UploadView";
class WelcomeView extends Component {
  render() {
    return (
      <div>
        <section className="welcomeSection">
          <div className="mainContainer container">
            <div className="d-flex flex-column justify-content-between welcomeWrapper">
              <div className="welcomeDetails">
                <h3>
                  At <span className="heroHeader">PlantPharmacy</span>,<br />
                  we help save your plants.
                </h3>
                <p>
                  Upload an image of your ailing plant and we'll let you know
                  the disease detected, allowing you to treat your plants more
                  confidently.
                </p>
                <img />
              </div>
              <p className="uploadCaption">
                For best results, upload an image (JPG or PNG) that’s close to
                the subject and between 1MB and 10MB in size.
              </p>
            </div>
            <UploadView />
          </div>
        </section>
      </div>
    );
  }
}

export default WelcomeView;
