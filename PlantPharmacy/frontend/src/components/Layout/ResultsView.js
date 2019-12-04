import React, { Component } from "react";
import ImageView from "./ImageView";

// Displays Results to user
// precondition: image has been succesfully uploaded, processed, and a response received back from web server

// Required props: result
class ResultsView extends Component {
  render() {
    let classification = this.props.classification;
    if (classification == "") {
      classification = "... prediction is shown here";
    }
    return (
      <div>
        <section id="resultsSection" className="resultsSection">
          <div className="container">
            <div className="titleLine"></div>
            <h4>Your plant report</h4>
            <div className="reportWrapper_dskt">
              <ImageView imageUrl={this.props.imageUrl} />
              <div className="resultsContainer">
                <div className="reportCard">
                  <h5>Disease detected</h5>
                  <h6>{classification}</h6>
                  <br />
                  <p>
                    Material on this page is for informational purposes only and
                    <br />
                    should not be constructed as treatment advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ResultsView;
