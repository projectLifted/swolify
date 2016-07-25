import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from "react-router";

import Navigation from './Navigation';
import Footer from './Footer';
import GoalsWidget from './sidebar/GoalsWidget'

import moment from 'moment';
import DatePicker from 'react-datepicker';

import '../scss/primary.scss';

export default class NewGoal extends React.Component {
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

                  <form id="new-goal-form">

                    <div className="row">
                      <div className="col-md-10 extra-height">

                      <label className="block-label">Select your goal type:</label>

                      <label className="radio">
                        <input type="radio" name="goalOptions" id="weightGoal" value="weightlifting" /> Weightlifting Goal

                      </label>
                      <label className="radio">
                        <input type="radio" name="goalOptions" id="cardioGoal" value="cardio" /> Cardio Goal
                      </label>
                      <label className="radio">
                        <input type="radio" name="goalOptions" id="healthGoal" value="personalhealth" /> Personal Health Goal
                      </label>
                    </div>

                    </div>

                    <div className="row">
                          <div className="col-md-10">
                        <div className="form-group">
                            <label for="goalName">Name Your Goal (example: <i>"Bench Press"</i>)</label>
                            <input type="text" className="form-control" id="goalName" placeholder="" />
                        </div>
                      </div>

                    </div>

                      <div className="row">

                          <div className="col-md-3">
                              <div className="form-group">

                                  <label for="repGoal">Rep Goal</label>
                                  <input type="number" className="form-control" id="repGoal" placeholder="" />
                              </div>

                          </div>

                          <div className="col-md-3">
                              <div className="form-group">
                                  <label for="weightGoal">Weight Goal</label>
                                  <div className="input-group">
                                      <input type="number" className="form-control" id="weightGoal" placeholder="" />
                                      <div className="input-group-addon">Lbs</div>
                                  </div>
                              </div>

                          </div>

                          <div className="col-md-4">
                              <div className="form-group">
                                  <label for="goalDate">Goal Completion Date</label>
                                    <DatePicker className="form-control date-picker"
                                         selected={this.state.startDate}
                                         onChange={this.handleDate.bind(this, "startDate")}  />
                                  </div>
                          </div>
                      </div>

                          <center><button type="submit" className="btn btn-primary form-submit"><i className="fa fa-plus-square" aria-hidden="true"></i> Add Goal</button></center>
                      </form>


                  </div>

                  <div className="col-md-4" id="side-bar">

                      <button type="button" className="btn btn-success"><i className="fa fa-tachometer" aria-hidden="true"></i> View Dashboard</button>

                      <button type="button" className="btn btn-info"><i className="fa fa-plus-circle" aria-hidden="true"></i> Post Workout</button>

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
