import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from "react-router";

import Navigation from './Navigation';
import Footer from './Footer';
import GoalsWidget from './sidebar/GoalsWidget'

import moment from 'moment';
import DatePicker from 'react-datepicker';

import bodyTypes from '../images/bodytypes.jpg';

import '../scss/primary.scss';

export default class Signup extends React.Component {
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

  render() {
    return (
              <article>
                <header id="signup-header">

                <Navigation />

                </header>

                <div className="page-title-bar">
                    <h1>Sign-Up</h1>
                </div>

                <div className="container main-content">

                <div class="row">

                  <form id="new-goal-form" className="col-md-8 col-md-offset-2">

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="" />
                        </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                              <label for="lastName">Last Name</label>
                              <input type="text" className="form-control" id="lastName" placeholder="" />
                          </div>
                          </div>

                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                              <label for="city">City</label>
                              <input type="text" className="form-control" id="city" placeholder="" />
                          </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                                <label for="state">State</label>
                                <input type="text" className="form-control" id="state" placeholder="" />
                            </div>
                            </div>

                        </div>

                      <div className="row">
                        <div className="col-md-4">

                        <label className="block-label">Select your gender:</label>

                        <label className="radio">
                          <input type="radio" name="gender" id="man" value="man" /> Man

                        </label>
                        <label className="radio">
                          <input type="radio" name="gender" id="woman" value="woman" /> Woman
                        </label>

                    </div>

                      <div className="col-md-8">

                      <label className="block-label">Select your body type:</label>

                      <label className="radio">
                        <input type="radio" name="bodyType" id="ectomorph" value="ectomorph" /> Ectomorph

                      </label>
                      <label className="radio">
                        <input type="radio" name="bodyType" id="mesomorph" value="mesomorph" /> Mesomorph
                      </label>
                      <label className="radio">
                        <input type="radio" name="bodyType" id="endomorph" value="endomorph" /> Endomorph
                      </label>

                    </div>

                    <center><img src={bodyTypes} /></center>

                  </div>


                      <div className="row">

                        <div className="col-md-3">
                            <div className="form-group">
                                <label for="height-feet">Height (Feet)</label>
                                <div className="input-group">
                                    <input type="number" className="form-control" id="height-feet" placeholder="" />
                                    <div className="input-group-addon">Feet</div>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-3">
                            <div className="form-group">
                                <label for="height-inches">Height (Inches)</label>
                                <div className="input-group">
                                    <input type="number" className="form-control" id="height-inches" placeholder="" />
                                    <div className="input-group-addon">Inches</div>
                                </div>
                            </div>

                        </div>

                          <div className="col-md-3">
                              <div className="form-group">
                                  <label for="body-weight">Weight</label>
                                  <div className="input-group">
                                      <input type="number" className="form-control" id="body-weight" placeholder="" />
                                      <div className="input-group-addon">Lbs</div>
                                  </div>
                              </div>

                          </div>

                          <div className="col-md-3">
                              <div className="form-group">
                                  <label for="birth-date">Birth Date</label>
                                    <DatePicker className="form-control date-picker"
                                         selected={this.state.birthDate}
                                         onChange={this.handleDate.bind(this, "birthDate")}  />
                                  </div>
                          </div>

                      </div>

                      <center><button type="submit" className="btn btn-primary form-submit"><i className="fa fa-user-plus" aria-hidden="true"></i>  Sign-Up</button></center>

                      </form>

                    </div>
              </div>

              <Footer />
              </article>


    );
  }
}
