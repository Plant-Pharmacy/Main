import React, {Component} from 'react';

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
