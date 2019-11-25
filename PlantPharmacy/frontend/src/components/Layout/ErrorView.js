// import React, { Component } from "react";
// import { PopupboxManager, PopupboxContainer } from "react-popupbox";

// export class ErrorView extends Component {
//   openPopupbox() {
//     const content = (
//       <div>
//         <p>
//           Please upload an image with a file that is no less than 1440x1080
//           pixels, 3.1 MP and no more than 4032x3024 pixels, 10 MP
//         </p>
//       </div>
//     );
//     PopupboxManager.open({ content });
//   }
//   openPopupboxImageSize() {
//     const content = (
//       <div>
//         <p>
//           message 2: Please upload an image with a file that is no less than
//           1440x1080 pixels, 3.1 MP and no more than 4032x3024 pixels, 10 MP
//         </p>
//       </div>
//     );
//     PopupboxManager.open({ content });
//   }

//   render() {
//     const popupboxConfig = {
//       titleBar: {
//         enable: true,
//         text: "Error: Invalid file size"
//       },
//       fadeIn: true,
//       fadeInSpeed: 500
//     };
//     const popupboxConfig2 = {
//       titleBar: {
//         enable: true,
//         text: "Error2: Invalid file size"
//       },
//       fadeIn: true,
//       fadeInSpeed: 500
//     };
//     return (
//       <div>
//         <button onClick={this.openPopupboxImageSize}>Click me</button>
//         <PopupboxContainer {...popupboxConfig2} />
//         {console.log(popupboxConfig.titleBar.text)}
//       </div>
//     );
//   }
// }

// import React, { Component } from "react";
// import { Button, Modal } from "react-bootstrap";

// // Displays error to user in dialog

// // Required props: errorMessage

// class ErrorView extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       show: false
//     };
//   }

//   // Handles Error Modal toggle
//   handleModal() {
//     this.setState({ show: !this.state.show });
//   }
//   // Renders Error modal
//   render() {
//     return (
//       <div>
//         <Button
//           onClick={() => {
//             this.handleModal();
//           }}
//         >
//           Test
//         </Button>
//         <Modal
//           className="myError"
//           id="imageSizeError"
//           show={this.state.show}
//           onHide={() => this.handleModal()}
//           size="sm"
//           aria-labelledby="contained-modal-title-vcenter"
//           centered
//         >
//           <Modal.Header closeButton>Error: Invalid file size</Modal.Header>
//           <Modal.Body>
//             <p>
//               Please upload an image with a file that is no less than 1440x1080
//               pixels, 3.1 MP and no more than 4032x3024 pixels, 10 MP
//             </p>
//           </Modal.Body>
//         </Modal>
//       </div>
//     );
//   }
// }

//testing out functions
import React, { Component } from "react";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";

export class ErrorView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  //   Error variables
  errorTitleImageSize = "Error: Invalid file size";
  errorMessageImageSize =
    "Please upload an image with a file that is no less than 1440x1080pixels, 3.1 MP and no more than 4032x3024 pixels, 10 MP";
  errorTitleFileType = "Error: Invalid file type";
  errorMessageFileType = "Please upload either a .JPG or .PNG image";

  // Error title
  popupboxConfig = {
    titleBar: {
      enable: true,
      text: "Error"
    },
    fadeIn: true,
    fadeInSpeed: 500
  };
  // Error message container
  openPopupbox() {
    const content = (
      <div>
        <p></p>
      </div>
    );
    PopupboxManager.open({ content });
  }
  // Handles Error Modal
  handleErrorMessage(message) {
    this.openPopupbox.content = message;
    console.log("this is openPopupbox");
    console.log(this.openPopupbox);
    return this.openPopupbox;
  }

  render() {
    return (
      <div>
        <button onClick={this.handleErrorMessage(this.errorMessageFileType)}>
          Click me
        </button>
        <PopupboxContainer {...this.popupboxConfig} />
      </div>
    );
  }
}

export default ErrorView;
