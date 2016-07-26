import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

import '../scss/primary.scss';

import logo from '../images/logo.png';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <div class="navbar-brand">
          <img src={logo} alt="swolify" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={2} href="/api/auth/facebook"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</NavItem>
          <NavItem eventKey={2} href="/api/auth/facebook/logout"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</NavItem>
          <NavItem eventKey={4} href="#"><i className="fa fa-tachometer" aria-hidden="true"></i> Dashboard</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}
