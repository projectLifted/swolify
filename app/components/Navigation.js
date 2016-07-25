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
          <NavItem eventKey={1} href="http://google.com">About</NavItem>
          <NavItem eventKey={2} href="#">Login</NavItem>
          <NavItem eventKey={4} href="#">Dashboard</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}
