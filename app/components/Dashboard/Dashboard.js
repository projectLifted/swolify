import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from "react-router";

import Navigation from '../Navigation';
import Footer from '../Footer';
import GoalsWidget from '../sidebar/GoalsWidget'

import moment from 'moment';
import DatePicker from 'react-datepicker';
import ReactFilepicker from 'react-filepicker';

import bodyTypes from '../../images/bodytypes.jpg';

import '../../scss/primary.scss';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      birthdate: ""
    }

  }
  handleDate(field, event) {
    this.setState({
      [field]: event
    })
  }

  handleChange(field, event) {

    this.setState({
      [field]: event.target.value
    });
  }

  handleFile(field, event) {
    console.log(event.url);
    this.setState({
       profilePicture: event.url
    });
  }

  render() {
    return (
              <article>
                <header id="dashboard-header">

                  <Navigation />

                </header>

                <div className="page-title-bar">
                    <h1>Dashboard</h1>
                </div>

                <div className="container main-content">


                </div>

              <Footer />
              </article>

    );
  }
}