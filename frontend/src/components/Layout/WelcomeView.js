import React, { Component } from "react";
import UploadView from "./UploadView";
import heroAi from "../../imgs/heroAi.svg";
class WelcomeView extends Component {
  render() {
    return (
      <div>
        <section className="welcomeSection">
          <div className="mainContainer container">
            <div className="d-flex flex-column justify-content-between welcomeWrapper">
              <div className="welcomeDetails">
                <div className="heroLeftContentWrapper_dskp">
                  <h3>
                    At <span className="heroHeader">PlantPharmacy</span>,<br />
                    we help save your plants.
                  </h3>
                  <p>
                    Upload an image of your ailing plant and we'll let you know
                    the disease detected, allowing you to treat your plants more
                    confidently.
                  </p>
                  <UploadView
                    handleImageChange={this.props.handleImageChange}
                    handleSubmit={this.props.handleSubmit}
                  />
                  <p className="uploadCaption_dskt">
                    <strong>Usage</strong>
                    <br />
                    <br />
                    1. Choose an image to upload by tapping/clicking on "Upload
                    Image" button.
                    <br />
                    2. Start image processing by tapping/clicking on "Submit"
                    button.
                    <br />
                    <br />
                    For best results, upload an image (JPG or PNG) that’s close
                    to the subject & between 10KB and 5MB in size.
                  </p>
                </div>

                <div className="heroGirl">
                  <img className="heroGirlImg" src={heroAi} />
                </div>
              </div>
              <p className="uploadCaption">
                <strong>Usage</strong>
                <br />
                <br />
                1. Choose an image to upload by tapping/clicking on "Upload
                Image" button.
                <br />
                2. Start image processing by tapping/clicking on "Submit"
                button.
                <br />
                <br />
                For best results, upload an image (JPG or PNG) that’s close to
                the subject & between 10KB and 5MB in size.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WelcomeView;
