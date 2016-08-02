import React from 'react';
import { browserHistory } from 'react-router';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { createGoal } from '../../services/goalService';
import { getAuth } from '../../services/loginService.js';

export default class CardioForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      endDate: moment(),
      goalName: "",
      goalDistance: 0,
      goalMileTime: 0,
    }
  }

  handleDate(field, event) {
    this.setState({
      [field]: event
    })
  }

  handleChange(field, event) {
    this.setState({[field]: event.target.value});
  }

  // TODO: This is recieving an error, cannot read '.then' of undefined

  handleSubmit(event) {

    event.preventDefault();
    createGoal({
      goalType: "Cardio",
      goalName: this.state.goalName,
      goalStartDate: moment(),
      goalDistance: this.state.goalDistance,
      goalMileTime: this.state.goalMileTime,
      workouts: [],
      goalOwner: this.props.userId
    })
      browserHistory.push("/dashboard");
  }

  render() {
    return (
      <form id="new-goal-form" onSubmit={this.handleSubmit.bind(this)}>
      <div>
        <div className="col-md-10">
      <div className="form-group">
          <label for="goalName">Name Your Goal (example: <i>"Running"</i>)</label>
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
                <label for="weightGoal">Goal Mile Time</label>
                <div className="input-group">
                    <input
                      type="number"
                      min={0}
                      className="form-control"
                      id="goalMileTime"
                      placeholder=""
                      required
                      value={this.state.goalMileTime}
                      onChange={this.handleChange.bind(this, "goalMileTime")}
                    />
                    <div className="input-group-addon">Minutes</div>
                </div>
            </div>

        </div>

        <div className="col-md-3">
            <div className="form-group">
                <label for="weightGoal">Goal Distance</label>
                <div className="input-group">
                    <input
                      type="number"
                      min={0}
                      className="form-control"
                      id="goalDistance"
                      placeholder=""
                      required value={this.state.goalDistance}
                      onChange={this.handleChange.bind(this, "goalDistance")}
                    />
                    <div className="input-group-addon">Miles</div>
                </div>
            </div>

        </div>



        <div className="row">

          <div className="col-md-10">

          <center><button type="submit" className="btn btn-primary form-submit"><i className="fa fa-plus-square" aria-hidden="true"></i> Add Goal</button></center>

          </div>

        </div>

    </div>
  </form>
    )
  }
}
