import React, { Component } from "react";

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
            <label className="uploadBtnLabel" htmlFor="formId">
              Choose Image
            </label>
          </div>

          <button className="uploadBtn">Submit</button>
        </form>
      </div>
    );
  }
}
export default UploadView;
