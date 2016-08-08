import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';
import { putUser } from '../services/userService';
import { connect } from 'react-redux';

import Navigation from './Navigation';
import Footer from './Footer';
import GoalsWidget from './sidebar/GoalsWidget'

import moment from 'moment';
import DatePicker from 'react-datepicker';
import ReactFilepicker from 'react-filepicker';

import bodyTypes from '../images/bodytypes.jpg';

import '../scss/primary.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        firstName: "",
        lastName: "",
        location: {city: "", state: ""},
        birthDate: moment(),
        gender: "",
        bodyType: "",
        heightFeet: "",
        heightInches: "",
        startWeight: "",
        goalWeight: "",
        profilePicture: "",
        ladyChecked: false,
        manChecked: false,
        ectoChecked: false,
        endoChecked: false,
        mesoChecked: false
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

    if (event.target.value === "man") {
      this.setState({
        manChecked: true,
        ladyChecked: false,
        gender: 'man'
      });
    }
    else if (event.target.value === "woman") {
      this.setState({
        manChecked: false,
        ladyChecked: true,
        gender: 'woman'
      });
    }

    else if (event.target.value === "mesomorph") {
      this.setState({
        ectoChecked: false,
        endoChecked: false,
        mesoChecked: true,
        bodyType: 'mesomorph'
      });
    }
    else if (event.target.value === "ectomorph") {
      this.setState({
        ectoChecked: true,
        endoChecked: false,
        mesoChecked: false,
        bodyType: 'ectomorph'
      });
    }

    else if (event.target.value === "endomorph") {
      this.setState({
        ectoChecked: false,
        endoChecked: true,
        mesoChecked: false,
        bodyType: 'endomorph'
      });
    }

  }

  handleFile(field, event) {
    this.setState({
       profilePicture: event.url
    });
  }

  componentWillMount(){


        let location = this.props.user.location.split(', ');
        let city = location[0];
        let state = location[1];

        if(this.props.user.gender === "man") {
          this.state.manChecked = true;
        }
        else if (this.props.user.gender === "woman") {
          this.state.ladyChecked = true
        }

        if(this.props.user.bodyType === "ectomorph") {
          this.state.ectoChecked = true;
        }

        else if(this.props.user.bodyType === "mesomorph") {
          this.state.mesoChecked = true;
        }

        else if(this.props.user.bodyType === "endomorph") {
          this.state.endoChecked = true;
        }


        this.setState({
          firstName: this.props.user.firstName,
          lastName: this.props.user.lastName,
          city: city,
          state: state,
          birthDate: moment(this.props.user.birthDate),
          gender: this.props.user.gender,
          bodyType: this.props.user.bodyType,
          heightFeet: this.props.user.heightFeet,
          heightInches: this.props.user.heightInches,
          startWeight: this.props.user.startWeight,
          goalWeight: this.props.user.goalWeight,
          profilePicture: this.props.user.profilePicture,
          following: this.props.user.following,
          pictures: this.props.user.pictures
        })

  }

  handleSignup(event) {
    event.preventDefault();

      putUser({
        _id: this.props.user._id,
        facebookId: this.props.user.facebookId,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        location: `${this.state.city}, ${this.state.state}`,
        birthDate: this.state.birthDate,
        gender: this.state.gender,
        bodyType: this.state.bodyType,
        heightFeet: this.state.heightFeet,
        heightInches: this.state.heightInches,
        startWeight: this.state.startWeight,
        goalWeight: this.state.goalWeight,
        profilePicture: this.state.profilePicture,
        following: this.props.user.following,
        pictures: this.props.user.pictures
      }, this.props.user._id);

      browserHistory.push('/dashboard');

  }

  render() {

    return (
              <article>
                <header id="signup-header">

                <Navigation />

                </header>

                <div className="page-title-bar">
                    <h1>Edit Profile</h1>
                </div>

                <div className="container main-content">

                <div class="row">

                  <form id="new-goal-form" className="col-md-8 col-md-offset-2" onSubmit={this.handleSignup.bind(this)}>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                            <label for="firstName">First Name</label>
                            <input required type="text" className="form-control" id="firstName" placeholder=""
                              value={this.state.firstName}
                              onChange={this.handleChange.bind(this, "firstName")}
                               />

                        </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                              <label required for="lastName">Last Name</label>
                              <input type="text" className="form-control" id="lastName" placeholder=""
                                value={this.state.lastName}
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
                                value={this.state.city}
                                onChange={this.handleChange.bind(this, "city")}
                                />
                          </div>
                          </div>

                          <div className="col-md-4">
                            <div className="form-group">
                                <label for="state">State</label>
                                <input required type="text" className="form-control" id="state" placeholder=""
                                  value={this.state.state}
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

                        <label className="block-label">Select your gender:</label>

                        <label className="radio">
                          <input type="radio" name="gender" id="man"
                            value="man"
                            checked={this.state.manChecked}
                            onChange={this.handleChange.bind(this, "gender")}
                          /> Man

                        </label>
                        <label className="radio">
                          <input type="radio" name="gender" id="woman"
                            value="woman"
                            checked={this.state.ladyChecked}
                            onChange={this.handleChange.bind(this, "gender")}
                             /> Woman
                        </label>

                    </div>

                      <div className="col-md-8">

                      <label className="block-label">Select your body type:</label>

                      <label className="radio">
                        <input type="radio" name="bodyType" id="ectomorph"
                            value="ectomorph"
                            checked={this.state.ectoChecked}
                            onChange={this.handleChange.bind(this, "bodyType")} /> Ectomorph

                      </label>
                      <label className="radio">
                        <input type="radio" name="bodyType" id="mesomorph"
                            value="mesomorph"
                            checked={this.state.mesoChecked}
                            onChange={this.handleChange.bind(this, "bodyType")} /> Mesomorph
                      </label>
                      <label className="radio">
                        <input type="radio" name="bodyType" id="endomorph"
                            value="endomorph"
                            checked={this.state.endoChecked}
                            onChange={this.handleChange.bind(this, "bodyType")} /> Endomorph
                      </label>

                    </div>

                    <center><img src={bodyTypes} /></center>

                  </div>


                      <div className="row">

                        <div className="col-md-3">
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

                        <div className="col-md-3">
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

                          <div className="col-md-3">
                              <div className="form-group">
                                  <label for="start-weight">Start Weight</label>
                                  <div className="input-group">
                                      <input required type="number" className="form-control" id="start-weight" placeholder=""
                                        value={this.state.startWeight}
                                        onChange={this.handleChange.bind(this, "startWeight")} />
                                      <div className="input-group-addon">Lbs</div>
                                  </div>
                              </div>

                          </div>

                          <div className="col-md-3">
                              <div className="form-group">
                                  <label for="goal-weight">Goal Weight</label>
                                  <div className="input-group">
                                        <input type="number" className="form-control" id="goal-weight" placeholder=""                                           value={this.state.goalWeight}
                                        onChange={this.handleChange.bind(this, "goalWeight")} />
                                      <div className="input-group-addon">Lbs</div>
                                  </div>
                              </div>

                          </div>


                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <center><label class="extra-height" for="birth-date">Upload Profile Photo</label></center>
                          <center><ReactFilepicker buttonClass="btn btn-success btn-filepicker" apikey={'Agks1hdLoTWKr1uAnYtC3z'} defaultWidget={false}  onSuccess={this.handleFile.bind(this, "file")} /></center>
                        </div>
                     </div>

                     {this.state.profilePicture

                        ?
                        <div className="col-md-12">
                          <center><img className="filepickerPhoto" src={this.state.profilePicture} /></center>
                        </div>
                        :
                        <div className="col-md-12">
                        </div>
                      }

                        <center><button type="submit" className="btn btn-primary form-submit"><i className="fa fa-user-plus" aria-hidden="true" onClick={this.handleSignup.bind(this)}></i>  Save Changes</button></center>

                      </form>

                    </div>
              </div>

              <Footer />
              </article>

    );
  }
}

export default connect(state => ({user: state.user}))(Signup);
