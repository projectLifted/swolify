import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {Link, browserHistory} from "react-router";
import { connect } from 'react-redux';
import { signout } from '../ducks/userDuck';
import store from '../store';
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

  logoutUser() {
    store.dispatch(signout());
  }

  render() {
    return (
      <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <div class="navbar-brand">
          <Link to="/"><div className="textLogo"><span className="logoIcon">5</span>Swolify</div></Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />

        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight >
              <LinkContainer to="/dashboard"><NavItem className="nav-link-ctrl" eventKey={1} ><i className="fa fa-tachometer" aria-hidden="true"></i> Dashboard</NavItem></LinkContainer>
              <LinkContainer to="/new-goal"><NavItem className="nav-link-ctrl" eventKey={2} ><i className="fa fa-plus-circle" aria-hidden="true"></i> Add Goal</NavItem></LinkContainer>
              <LinkContainer to="/search"><NavItem className="nav-link-ctrl" eventKey={3} ><i className="fa fa-search" aria-hidden="true"></i> Search Users</NavItem></LinkContainer>
              <NavItem className="nav-link-ctrl" eventKey={4} onClick={this.logoutUser} href="/api/auth/facebook/logout"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</NavItem>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
    );
  }
}
