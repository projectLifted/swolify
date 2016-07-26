import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from "react-router";

import Navigation from './Navigation';
import Footer from './Footer';
import GoalsWidget from './sidebar/GoalsWidget';
import LiftingForm from './subcomponents/LiftingForm';
import CardioForm from './subcomponents/CardioForm';
import UserWidget from './sidebar/UserWidget.js';

import moment from 'moment';
import DatePicker from 'react-datepicker';

import '../scss/primary.scss';

export default class NewGoal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment(),
      radioOption: "weightLifting",
      goalName: this.props.goalName
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

    createGoal() {
      console.log(this.state.goalName)
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

                    {/* Start radio options */}

                      <label className="radio">
                        <input type="radio" name="goalOptions" id="weightGoal" value={this.state.liftingRadio} defaultChecked onClick={this.handleRadioChange.bind(this, "weightLifting")}/> Weightlifting Goal

                      </label>
                      <label className="radio">
                        <input type="radio" name="goalOptions" id="cardioGoal" value={this.state.cardioRadio} onClick={this.handleRadioChange.bind(this, "cardio")} /> Cardio Goal
                      </label>
                      <label className="radio">
                        <input type="radio" name="goalOptions" id="healthGoal" value={this.state.bodyWeightRadio} onClick={this.handleRadioChange.bind(this, "bodyWeight")} /> Body Weight Goal
                      </label>

                      {/* End radio options */}

                    </div>

                    </div>

                      <div className="row">


                          <div>
                            {
                              this.state.radioOption === "weightLifting"
                                ?
                              <LiftingForm
                                  goalName={this.props.goalName}
                              />
                                :
                              (
                                this.state.radioOption === "cardio"
                                  ?
                                <CardioForm/>
                                :
                                <p>Body weight Form</p>
                              )
                            }
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

                          <center><button type="submit" className="btn btn-primary form-submit"><i className="fa fa-plus-square" aria-hidden="true" onClick={this.createGoal}></i> Add Goal</button></center>

                      </form>


                  </div>

                  <div className="col-md-4" id="side-bar">

                    <UserWidget />

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
