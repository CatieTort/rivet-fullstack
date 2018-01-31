import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ("../stylesheets/bootstrap.flatly.min.css");
import Sidebar from './Sidebar';
import Form from './components/Form.js';

// page about one type of rivet aka rivet Profile

class Page extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return(
            <div>
                <div><Sidebar pages={this.props.pages}/></div>
                <div className="card border-primary mb-3" style="max-width: 20rem;">
                    <div className="card-body text-primary">
                        <h4 className="card-title">Primary card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page;
