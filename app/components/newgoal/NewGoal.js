import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from "react-router";
import { connect } from 'react-redux';

import Navigation from '../Navigation';
import Footer from '../Footer';
import GoalsWidget from '../sidebar/GoalsWidget';
import LiftingForm from './LiftingForm';
import CardioForm from './CardioForm';
import UserWidget from '../sidebar/UserWidget';
import { getAuth } from '../../services/loginService.js'

import moment from 'moment';
import DatePicker from 'react-datepicker';

import '../../scss/primary.scss';

class NewGoal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment(),
      radioOption: "weightLifting",
      goalName: this.props.goalName,
      user: {}
    }
  }

    componentWillMount() {
      if (!this.props.user.loggedIn) {
        browserHistory.push('/');
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

    handleRadioChange(field, event) {
      this.setState({radioOption: field})
    }

  render() {
    console.log(this.props.updateGoal);

    return (
    <article>
      <header id="new-goal-header">

      <Navigation />

      </header>

      <div className="page-title-bar">
          <h1>New Goal</h1>
      </div>

      <div className="container main-content">


          <div className="container">
              <div className="row">

                  <div className="col-md-8">


                    <div className="row">
                      <div className="col-md-10 extra-height">

                      <label className="block-label">Select your goal type:</label>

                    {/* Start radio options */}

                      <label className="radio">
                        <input type="radio" name="goalOptions" id="weightGoal" value={this.state.liftingRadio} defaultChecked onClick={this.handleRadioChange.bind(this, "weightLifting")}/> Weightlifting Goal

                      </label>
                      <label className="radio">
                        <input type="radio" name="goalOptions" id="cardioGoal" value={this.state.cardioRadio} onClick={this.handleRadioChange.bind(this, "cardio")} /> Cardio Goal
                      </label>

                    </div>

                    </div>

                      <div className="row">
                          <div>
                            {
                              this.state.radioOption === "weightLifting"
                                ?
                              <LiftingForm
                                  selectedGoal={this.props.updateGoal}
                                  goalName={this.props.goalName}
                                  userId={this.props.user._id}
                              />
                                :
                                <CardioForm
                                  userId={this.props.user._id}
                                />

                            }
                          </div>

                      </div>

                  </div>

                  <div className="col-md-4" id="side-bar">

                      <UserWidget user={this.props.user} />

                        <Link to="/dashboard"><button type="button" className="btn btn-success"><i className="fa fa-tachometer" aria-hidden="true"></i> View Dashboard</button></Link>

                      <GoalsWidget />




                  </div>
              </div>
          </div>

      </div>

    <Footer />
    </article>


    );
  }
}

export default connect(state => ({user: state.user, goals: state.goals, updateGoal: state.updateGoal}))(NewGoal);
