import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';
import { getAuth } from '../services/loginService.js';
import { signupUser } from '../services/signupService.js';

import { signin } from '../ducks/userDuck';
import { connect } from 'react-redux';

import Navigation from './Navigation';
import Footer from './Footer';
import GoalsWidget from './sidebar/GoalsWidget'

import moment from 'moment';
import DatePicker from 'react-datepicker';
import ReactFilepicker from 'react-filepicker';

import '../scss/primary.scss';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        firstName: "",
        lastName: "",
        location: {city: "", state: ""},
        birthDate: moment(),
        heightFeet: "",
        heightInches: "",
        startWeight: "",
        goalWeight: "",
        profilePicture: ""
      }
  }
  handleDate(field, event) {
    this.setState({
      [field]: event
    });
  }

  handleChange(field, event) {
    this.setState({
      [field]: event.target.value
    });
  }

  handleFile(field, event) {
    this.setState({
       profilePicture: event.url
    });
  }

  componentWillMount(){
    new Promise((resolve, reject)=> {
      getAuth(resolve, reject);
    }).then((res, err)=> {
      if (err){
        browserHistory.push('/');
      }
      else if(res.body === false){
        browserHistory.push('/');
      }
      else {
        this.setState({user: res.body})
      }
    })
  }

  handleSignup(event) {
    event.preventDefault();

    new Promise((resolve, reject) => {
      signupUser({
        _id: this.state.user._id,
        facebookId: this.state.user.facebookId,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        location: `${this.state.city}, ${this.state.state}`,
        birthDate: this.state.birthDate,
        heightFeet: this.state.heightFeet,
        heightInches: this.state.heightInches,
        startWeight: this.state.startWeight,
        profilePicture: this.state.user.profilePicture,
        wallPosts: [],
        following: [],
        pictures: []
      }, this.state.user._id, resolve, reject);
    }).then((res, err) => {
      if (err) {
        return
      }

    })

    setTimeout(function() {
      browserHistory.push('/dashboard');
    }, 1500)

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

                  <form id="new-goal-form" className="col-md-8 col-md-offset-2" onSubmit={this.handleSignup.bind(this)}>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                            <label for="firstName">First Name</label>
                            <input required type="text" className="form-control" id="firstName" placeholder=""
                              value={this.props.firstName}
                              onChange={this.handleChange.bind(this, "firstName")}
                               />

                        </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                              <label required for="lastName">Last Name</label>
                              <input type="text" className="form-control" id="lastName" placeholder=""
                                value={this.props.lastName}
                                onChange={this.handleChange.bind(this, "lastName")}
                                />
                          </div>
                          </div>



                      </div>

                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                              <label for="city">City</label>
                              <input required type="text" className="form-control" id="city" placeholder=""
                                value={this.props.city}
                                onChange={this.handleChange.bind(this, "city")}
                                />
                          </div>
                          </div>

                          <div className="col-md-4">
                            <div className="form-group">
                                <label for="state">State</label>
                                <input required type="text" className="form-control" id="state" placeholder=""
                                  value={this.props.state}
                                  onChange={this.handleChange.bind(this, "state")}
                                  />
                            </div>
                          </div>

                          <div className="col-md-4">


                              <div className="form-group">
                                  <label for="birth-date">Birth Date</label>
                                    <DatePicker className="form-control date-picker"
                                         selected={this.state.birthDate}
                                         onChange={this.handleDate.bind(this, "birthDate")}
                                         />
                                  </div>


                          </div>


                        </div>




                      <div className="row">

                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="height-feet">Height (Feet)</label>
                                <div className="input-group">
                                    <input required type="number" className="form-control" id="height-feet" placeholder=""
                                      value={this.state.heightFeet}
                                      onChange={this.handleChange.bind(this, "heightFeet")} />
                                    <div className="input-group-addon">Feet</div>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="height-inches">Height (Inches)</label>
                                <div className="input-group">
                                    <input required type="number" className="form-control" id="height-inches" placeholder=""
                                      value={this.state.heightInches}
                                      onChange={this.handleChange.bind(this, "heightInches")} />
                                    <div className="input-group-addon">Inches</div>
                                </div>
                            </div>

                        </div>

                          <div className="col-md-4">

                            <div className="form-group">
                       <label for="start-weight">Weight</label>
                       <div className="input-group">
                           <input required type="number" className="form-control" id="start-weight" placeholder=""
                             value={this.state.startWeight}
                             onChange={this.handleChange.bind(this, "startWeight")} />
                           <div className="input-group-addon">Lbs</div>
                       </div>


                              </div>

                        </div>

                      </div>

                        <center><button type="submit" className="btn btn-primary form-submit"><i className="fa fa-user-plus" aria-hidden="true" onClick={this.handleSignup.bind(this)}></i>  Sign-Up</button></center>

                      </form>

                    </div>
              </div>

              <Footer />
              </article>

    );
  }
}
