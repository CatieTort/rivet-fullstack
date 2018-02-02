import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Edit from './Edit.js';
import Sidebar from './Sidebar.js';
import ("../stylesheets/bootstrap.flatly.min.css");

// page about one type of rivet aka rivet Profile

class Page extends Component {
    render() {
        if(this.props.pages.length > 0) {
            let page;
            let rivetId = this.props.id;

            for (let i = 0; i < this.props.pages.length; i++){
                if (rivetId === this.props.pages[i].id) {
                    page = this.props.pages[i]
                }
            }

            return(
                <div>
                    <div><Sidebar pages={this.props.pages}/></div>
                        <div className="card border-primary mb-3">
                        <div className="card-body text-primary">

                            <h4 className="card-title">{page.rivet_type}</h4>
                            <p className="card-text">{page.content}</p>
                        </div>
                        <div>
                            <Button className="button">
                                <Link to={`/pages/${page.id}/edit`}>Edit Page</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        }
    }
}

export default Page;
