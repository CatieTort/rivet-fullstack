import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap'

class Header extends Component{
  render() {
    return(
      <div>
        <Navbar className="nav-bar"inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#company">Acme Rivet Co.</a>
            </Navbar.Brand>
              <Navbar.Toggle />
          </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem className="nav-link" href="#">
                  Register
                </NavItem>
                <NavItem className="nav-link" href="#">
                  Login
                </NavItem>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header;
