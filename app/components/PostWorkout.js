import React from 'react';
import {Link, browserHistory} from "react-router";

import Navigation from './Navigation';
import Footer from './Footer';
import GoalsWidget from './sidebar/GoalsWidget'

import moment from 'moment';
import DatePicker from 'react-datepicker';

import LiftWorkoutForm from './subcomponents/LiftWorkoutForm';
import '../scss/primary.scss';

export default class PostWorkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment()
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
      <header id="post-workout-header">

      <Navigation />

      </header>

      <div className="page-title-bar">
          <h1>Post Workout</h1>
      </div>

      <div className="container main-content">
          <div className="container">
              <div className="row">
                  <div className="col-md-8">
                  <form id="new-goal-form">

                    <div className="row">
                      <div className="col-md-10 extra-height">

                      {/*<label className="block-label">Select your goal type:</label>
                      <label className="radio">
                        <input type="radio" name="goalOptions" id="weightGoal" value="weightlifting" /> Weightlifting Goal
                      </label>
                      <label className="radio">
                        <input type="radio" name="goalOptions" id="cardioGoal" value="cardio" /> Cardio Goal
                      </label>
                      <label className="radio">
                        <input type="radio" name="goalOptions" id="healthGoal" value="personalhealth" /> Personal Health Goal
                      </label>*/}
                      </div>
                    </div>

                    <div className="row">

                      <LiftWorkoutForm/>

                    </div>

                      </form>
                  </div>
                  <div className="col-md-4" id="side-bar">
                      <button type="button" className="btn btn-success"><i className="fa fa-tachometer" aria-hidden="true"></i> View Dashboard</button>
                      <button type="button" className="btn btn-info"><i className="fa fa-plus-circle" aria-hidden="true"></i> Post Goal</button>
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
