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
        heightFeet: "",
        heightInches: "",
        startWeight: ""
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

  componentWillMount(){


        let location = this.props.user.location.split(', ');
        let city = location[0];
        let state = location[1];

        console.log(city, state);
        this.setState({
          firstName: this.props.user.firstName,
          lastName: this.props.user.lastName,
          city: city,
          state: state,
          birthDate: moment(this.props.user.birthDate),
          heightFeet: this.props.user.heightFeet,
          heightInches: this.props.user.heightInches,
          startWeight: this.props.user.startWeight
        })

  }

  handleSignup(event) {
    event.preventDefault();

      putUser({
        facebookId: this.props.user.facebookId,
        _id: this.props.user._id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        location: `${this.state.city}, ${this.state.state}`,
        birthDate: this.state.birthDate,
        heightFeet: this.state.heightFeet,
        heightInches: this.state.heightInches,
        startWeight: this.state.startWeight,
        profilePicture: this.props.user.profilePicture,
        wallPosts: this.props.user.wallPosts,
        following: this.props.user.following,
        pictures: this.props.user.pictures,
        updated: new Date()
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
