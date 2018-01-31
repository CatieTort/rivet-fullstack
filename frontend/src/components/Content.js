import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ("../stylesheets/bootstrap.flatly.min.css");
// list out all pages in seperate cards this is part of the first page loaded
const API = "http://localhost:3000"

class Content extends Component {
  constructor(props){
    super(props)

      this.state = {
        pages: []
      }
  }

  // map through the objects in the api and return id, rivet_type, and content for every item in the api
  componentWillMount() {
    // console.log("API IS PULLING-----" + API);
    fetch (`${API}/pages/`)
    .then((rawRes) => {
      return rawRes.json()
    })
    .then((parsedRes) => {
      // console.log("parsed", parsedRes)
      this.setState({
        pages: parsedRes.pages
      })
    })
    .catch ((error) => {
      return "Could not get pages:" + error;
    })
  }



  render(){
    // console.log("pages", this.state.pages);
    return(
      <div>
        {this.state.pages.map((page, index) => {
            return (
              <div className="card border-primary mb-3">
                <div className="card-body text-primary" key={index}>
                  <h4 className="card-title">{page.rivet_type}</h4>
                    <p className="card-text">{page.content}</p>
                </div>
            </div>
            )
          })
        }
      </div>
    )
  }
}

export default Content;
