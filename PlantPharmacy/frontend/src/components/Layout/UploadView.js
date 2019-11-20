import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";

// Receives image from user

// required prop: PhotoController
class UploadView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plantImage: null
    };
  }

  handleImageChange = e => {
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
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form
          enctype="multipart/form-data"
          method="post"
          onSubmit={this.handleSubmit}
        >
          <input
            type="file"
            name="myfile"
            accept="image/png, image/jpeg"
            onChange={this.handleImageChange}
            required
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default UploadView;
