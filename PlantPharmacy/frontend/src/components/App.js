import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { loadProgressBar } from "axios-progress-bar";

import HeaderView from "./Layout/HeaderView";
import WelcomeView from "./Layout/WelcomeView";
import ResultsView from "./Layout/ResultsView";
import FooterView from "./Layout/FooterView";

import "axios-progress-bar/dist/nprogress.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plantImage: null,
      imageUrl: "",
      errortest: ""
    };
  }

  handleImageChange = e => {
    if (!e.target.files[0]) {
      return;
    }
    this.setState({
      plantImage: e.target.files[0]
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
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
          imageUrl: res.data.plantImage
        });
        console.log(res.data.classification);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <HeaderView />
        <WelcomeView
          handleImageChange={this.handleImageChange}
          handleSubmit={this.handleSubmit}
        />
        <ResultsView imageUrl={this.state.imageUrl} />
        <FooterView />
      </div>
    );
  }
}

loadProgressBar();
ReactDOM.render(<App />, document.getElementById("app"));