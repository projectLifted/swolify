import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {Link, browserHistory} from "react-router";
import {LinkContainer} from "react-router-bootstrap";

import {getAuth} from '../services/loginService.js'

import '../scss/primary.scss';

import logo from '../images/logo.png';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      birthdate: "",
    }
  }

  render() {
    return (
      <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <div class="navbar-brand">
          <Link to="/"><img src={logo} alt="swolify" /></Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />

        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight >
              <LinkContainer to="/dashboard"><NavItem eventKey={4} ><i className="fa fa-tachometer" aria-hidden="true"></i> Dashboard</NavItem></LinkContainer>
              <NavItem eventKey={2} href="/api/auth/facebook/logout"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</NavItem>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
    );
  }
}
