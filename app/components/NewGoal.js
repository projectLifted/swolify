import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from "react-router";

import Navigation from './Navigation';
import Footer from './Footer';
import GoalsWidget from './sidebar/GoalsWidget';
import LiftingForm from './subcomponents/LiftingForm';
import CardioForm from './subcomponents/CardioForm';

import '../scss/primary.scss';

export default class NewGoal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      radioOption: "weightLifting",
    }
  }
  
    handleRadioChange(field, event) {
      this.setState({radioOption: field})
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

<<<<<<< HEAD
=======
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
>>>>>>> ea90cd03c043b9c1d1524ba2149d72546e0dcf18

                          <div>
                            {
                              this.state.radioOption === "weightLifting"
                                ?
                              <LiftingForm
                                  goalName={this.props.goalName}
                                  onChange={this.props.handleChange}
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


                      </div>

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
