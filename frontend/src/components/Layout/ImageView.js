import React, { Component } from "react";
import reportPlant from "../../imgs/reportPlantPlaceHolder.jpg";
// Displays image back to user

// Required props: image
class ImageView extends Component {
  constructor(props) {
    super(props);
  }

  // displays image
  render() {
    let imageUrl = this.props.imageUrl;
    if (imageUrl == "") {
      imageUrl = reportPlant;
    }

    return (
      <div className="displayedImageContainer">
        {/* resultsview passes uploaded image url as props */}
        <img src={imageUrl} className="displayedImage" />
      </div>
    );
  }
}

export default ImageView;
