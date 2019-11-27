import React, { Component } from "react";
import ImageView from "./ImageView";

// Displays Results to user
// precondition: image has been succesfully uploaded, processed, and a response received back from web server

// Required props: result
class ResultsView extends Component {
  render() {
    return (
      <div>
        <section className="resultsSection">
          <div className="container">
            <div className="titleLine"></div>
            <h4>Your plant report</h4>
            <ImageView imageUrl = {this.props.imageUrl}/>
            <div className="resultsContainer">
              <div className="reportCard">
                <h5>Disease detected</h5>
                <h6>Bacterial spot</h6>
                <br />
                <p>
                  Material on this page is for informational purposes only and
                  should not be constructed as treatment advice.
                </p>
              </div>
              <button className="downloadBtn" type="button" disabled>
                Download Report
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ResultsView;
