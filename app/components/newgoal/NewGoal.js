import React from 'react';
import {Link, browserHistory} from "react-router";

import Navigation from '../Navigation';
import Footer from '../Footer';
import GoalsWidget from '../sidebar/GoalsWidget';
import LiftingForm from './LiftingForm';
import CardioForm from './CardioForm';
import UserWidget from '../sidebar/UserWidget';

import moment from 'moment';
import DatePicker from 'react-datepicker';

import '../../scss/primary.scss';

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

    componentDidMount() {
      console.log(this.state.user);
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

                              <CardioForm/>
                            }
                          </div>

                      </div>

                      </form>


                  </div>

                  <div className="col-md-4" id="side-bar">

                      <UserWidget />

                      <button type="button" className="btn btn-success"><i className="fa fa-tachometer" aria-hidden="true"></i> View Dashboard</button>
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
