import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { loadProgressBar } from "axios-progress-bar";

import HeaderView from "./Layout/HeaderView";
import WelcomeView from "./Layout/WelcomeView";
import ResultsView from "./Layout/ResultsView";
import FooterView from "./Layout/FooterView";
import ErrorView from "./Layout/ErrorView";

import "axios-progress-bar/dist/nprogress.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";

const initialState = {
  plantImage: null,
  imageUrl: "",
  classification: "",
  errortest: false
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  reset() {
    this.setState({
      errortest: initialState.errortest
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.errortest == false) {
      let form_data = new FormData();
      form_data.append(
        "plantImage",
        this.state.plantImage,
        this.state.plantImage.name
      );
      let url = "http://localhost:8000/api/plants/";
      axios
        .post(url, form_data, {
          headers: {
            "content-type": "multipart/form-data"
          }
        })
        .then(res => {
          this.setState({
            imageUrl: res.data.plantImage,
            classification: res.data.classification
          });

          // scrolls to results while the image is being uploaded
          window.scroll({
            top: 800,
            behavior: "smooth"
          });
        })
        .catch(err => console.log(err));
    }
  };

  handleImageChange = e => {
    this.reset();
    if (!e.target.files[0]) {
      return;
    }
    if (e.target.files[0].size > 5100000 || e.target.files[0].size < 10000) {
      this.setState({
        errortest: true
      });
    } else {
      this.setState({
        plantImage: e.target.files[0]
      });
    }
  };

  render() {
    return (
      <div>
        <HeaderView />
        <WelcomeView
          handleImageChange={this.handleImageChange}
          handleSubmit={this.handleSubmit}
        />
        <section className="sectionDivdersvg"></section>
        <ResultsView
          imageUrl={this.state.imageUrl}
          classification={this.state.classification}
        />
        <ErrorView
          key={this.state.errortest.id}
          sizeError={this.state.errortest}
        />
        <section className="sectionDivdersvg2"></section>
        <FooterView />
      </div>
    );
  }
}

loadProgressBar();
ReactDOM.render(<App />, document.getElementById("app"));
