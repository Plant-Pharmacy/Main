import React, {Component} from 'react';


// Displays error to user in dialog

// Required props: errorMessage
class ErrorView extends Component {
    constructor(props) {
        super(props)
    }

    // displays image
    render() {
        return (
            <div>
                {this.props.errorMessage}
            </div>
        )
    }
}

export default ImageView;
