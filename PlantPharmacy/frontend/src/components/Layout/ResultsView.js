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
                    <div className="mainContainer container">
                        <div className="resultsViewSection">
                            <div className="reportCard">
                                <h5>Disease detected</h5>
                                <h6>Bacterial spot</h6>
                                <br/>
                                <p>Material on this page is for informational purposes only and should
                                    not be constructed as treatment advice.
                                </p>
                            </div>
                            <button className="downloadBtn" type="button">Download Report</button>
                        </div>
                    </div>
            </div> 
        )
    }
}

export default ResultsView;