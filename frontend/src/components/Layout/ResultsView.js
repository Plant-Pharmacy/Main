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
    } else {
      let plantName = classification.substr(0, classification.indexOf(" "));
      let plantResult = classification.substr(classification.indexOf(" ") + 1);
      let classificationUdate = [
        plantName.toLowerCase(),
        plantResult
          .toLowerCase()
          .split("_")
          .join(" ")
      ];
      if (
        classificationUdate[1] == "healthy" ||
        classificationUdate == "Healthy"
      ) {
        classification =
          "Your plant seems to be healthy! No disease has been detected at the moment.";
      } else {
        classification =
          "Your " +
          classificationUdate[0] +
          " seems to have " +
          classificationUdate[1] +
          "s.";
      }
    }
    return (
      <div>
        <section id="resultsSection" className="resultsSection">
          <div className="mainContainer container">
            <div className="titleLine"></div>
            <h4>Plant health report</h4>
            <div className="reportWrapper_dskt">
              <ImageView imageUrl={this.props.imageUrl} />
              <div className="resultsContainer">
                <div className="reportCard">
                  <h5>Prediction</h5>
                  <h6>{classification}</h6>
                  <br />
                  <p>
                    Please note, prediction accuracy is subject to change.
                    Material on this page is for informational purposes only and
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
