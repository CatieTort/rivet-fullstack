import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

  render(){

    return(
      <div className="side-container">
          <h2><u>Pages</u></h2>
              <ul>
                <li key={page.id}>
                  <Link to={`/pages/${page.id}`} >
                    {page.rivet_type}
                  </Link>
                </li>
              </ul>
            <Button className="button">Create Page</Button>
      </div>
    )
  }
}

export default Sidebar;
