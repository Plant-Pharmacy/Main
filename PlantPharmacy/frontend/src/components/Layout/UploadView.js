import React, { Component } from "react";

// Receives image from user

// required prop: PhotoController

class UploadView extends Component {

  render() {
    return (
      <div>
        <form
          className="formMobile"
          encType="multipart/form-data"
          method="post"
          onSubmit={this.props.handleSubmit}
        >
          <div className="">
            <input
              type="file"
              id="formId"
              name="plantImage"
              accept="image/png, image/jpeg"
              onChange={this.props.handleImageChange}
              required
            />
            <label className="uploadBtnLabel" for="formId">
              Upload
            </label>
          </div>

          <button className="uploadBtn">Submit</button>
        </form>
      </div>
    );
  }
}
export default UploadView;
