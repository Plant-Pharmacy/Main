import React, {Component} from 'react';


// Receives image from user

// required prop: PhotoController
class ResultsView extends Component {
    constructor(props) {
        super(props)
    }

    // displays upload form
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" />
                    <button type="submit">Upload</button>
                </form>
            </div>
        )
    }

    // makes POST call to web server, sending image and receiving back response
    // Note: this logic is implemented in the PhotoController
    onSubmit = event => {
        // call photoController
    }
}



export default ResultsView;
