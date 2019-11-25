import React, { Component } from "react";
import ReactDOM from "react-dom";

import HeaderView from "./Layout/HeaderView";
import WelcomeView from "./Layout/WelcomeView";
import ImageView from "./Layout/ImageView";
import ResultsView from "./Layout/ResultsView";
import FooterView from "./Layout/FooterView";
import ErrorView from "./Layout/ErrorView";

import "bootstrap/dist/css/bootstrap.min.css";

import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderView />
        <WelcomeView />
        <section className="resultsSection">
          <ImageView />
          <ResultsView />
        </section>
        <ErrorView />
        <FooterView />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
