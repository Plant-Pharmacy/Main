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
                    the disease <br />
                    detected, allowing you to treat your plants more
                    confidently.
                  </p>
                  <UploadView
                    handleImageChange={this.props.handleImageChange}
                    handleSubmit={this.props.handleSubmit}
                  />
                  <p className="uploadCaption_dskt">
                    For best results, upload an image (JPG or PNG) that’s close
                    to the subject & between 10KB and 5MB in size. Once you've
                    chosen an image tap on submit button to upload.
                  </p>
                </div>

                <div className="heroGirl">
                  <img src={heroAi} />
                </div>
              </div>
              <p className="uploadCaption">
                For best results, upload an image (JPG or PNG) that’s close to
                the subject & between 10KB and 5MB in size. Once you've chosen
                an image tap on submit button to upload.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WelcomeView;
