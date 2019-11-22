import React, {Component} from 'react';

// Displays image back to user

// Required props: image
class ImageView extends Component {
    constructor(props) {
        super(props)
    }

    // displays image
    render() {
        return (
            <div>
                    <div className="mainContainer container">
                        <div className="imageViewSection">
                            <div className="titleLine"></div>
                            <h4>Your plant report</h4>
                        </div>
                    </div>
            </div>
        )
    }
}

export default ImageView;