import React from 'react';
import { browserHistory } from 'react-router';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { getAuth } from '../../services/loginService.js';
import '../../scss/primary.scss';
import { createGoal } from '../../services/goalService';

export default class LiftingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goalType: "weightlifting",
      goalName: "",
      goalMax: 0,
      endDate: moment(),
    }
  }

  handleChange(field, event) {
    this.setState({[field]: event.target.value});
  }

  handleDate(field, event) {
    this.setState({
      [field]: event
    })
  }

  handleSubmit(event) {

    event.preventDefault();
      createGoal({
        goalType: "WeightLifting",
        goalName: this.state.goalName,
        goalStartDate: moment(),
        goalEndDate: this.state.endDate,
        goalMax: this.state.goalMax,
        workouts: [],
        goalOwner: this.props.userId
      });

        browserHistory.push("/dashboard")
  }

  render() {

    return (
      <form id="new-goal-form" onSubmit={this.handleSubmit.bind(this)}>

        <div className="col-md-10">
          <div className="form-group">
            <label for="goalName">Name Your Goal (example: <i>"Bench Press"</i>)</label>
            <input
              type="text"
              className="form-control"
              id="goalName"
              placeholder=""
              required
              value={this.state.goalName}
              onChange={this.handleChange.bind(this, "goalName")}
            />
        </div>


      </div>

        <div className="col-md-3">
            <div className="form-group">
                <label for="weightGoal">One Rep Max Goal</label>
                <div className="input-group">
                    <input
                      type="number"
                      min={0}
                      step={5}
                      className="form-control"
                      id="goalMax"
                      placeholder=""
                      required
                      value={this.state.goalMax}
                      onChange={this.handleChange.bind(this, "goalMax")}
                    />

                    <div className="input-group-addon">Lbs</div>
                </div>
            </div>

        </div>

        <div className="row">

          <div className="col-md-10">

            <center><button type="submit" className="btn btn-primary form-submit"><i className="fa fa-plus-square" aria-hidden="true"></i> Add Goal</button></center>

          </div>

        </div>


    </form>
    )
  }
}
