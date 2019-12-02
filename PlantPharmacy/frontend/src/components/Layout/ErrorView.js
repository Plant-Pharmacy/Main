import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

class ErrorView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  UNSAFE_componentWillReceiveProps = nextProps => {
    this.setState({ show: nextProps.sizeError });
  };
  // Handles Error Modal toggle
  handleModal() {
    this.setState({ show: !this.state.show });
  }

  // Renders Error modal
  render() {
    return (
      <div>
        <Modal
          className="myError"
          id="imageSizeError"
          show={this.state.show}
          onHide={() => this.handleModal()}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>Error: Invalid file size</Modal.Header>
          <Modal.Body>
            <p>
              Please upload an image with a file size that is no less than 10KB
              and no more than 2MB.
            </p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ErrorView;
