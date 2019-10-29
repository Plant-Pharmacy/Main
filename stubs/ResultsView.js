import React, {Component} from 'react';


// Displays Results to user
// precondition: image has been succesfully uploaded, processed, and a response received back from web server

// Required props: result
class ResultsView extends Component {
    constructor(props) {
        super(props)
    }

    // displays result
    render() {
        return (
            <div>
                {this.props.result}
            </div>
        )
    }
}

export default ResultsView;
