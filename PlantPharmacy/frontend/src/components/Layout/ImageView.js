import React, { Component } from "react";

// Displays image back to user

// Required props: image
class ImageView extends Component {
  constructor(props) {
    super(props);
  }

  // displays image
  render() {
    return (
      <div>
        {/* uploadview passes uploaded image url as props */}
        <div className="displayedImageContainer">
          <img src={this.props.imageUrl} className="displayedImage" />
        </div>
      </div>
    );
  }
}

export default ImageView;
