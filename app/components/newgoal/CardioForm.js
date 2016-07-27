import React from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import { postGoal } from '../../services/goalService';

export default class CardioForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      endDate: moment(),
      goalName: "",
      goalDistance: 0,
      goalTime: 0,
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

  handleSubmit(event) {
    event.preventDefault();

      let goal = {
        goalType: "cardio",
        goalName: this.state.goalName,
        goalStartDate: moment(),
        goalEndDate: this.state.endDate,
        goalDistance: this.state.goalDistance,
        goalTime: this.state.goalTime,
        workouts: []
      }

      console.log(goal);
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
                <label for="weightGoal">Time</label>
                <div className="input-group">
                    <input
                      type="number"
                      min={0}
                      className="form-control"
                      id="weightGoal"
                      placeholder=""
                      required
                      value={this.state.goalTime}
                      onChange={this.handleChange.bind(this, "goalTime")}
                    />
                    <div className="input-group-addon">Minutes</div>
                </div>
            </div>

        </div>

        <div className="col-md-3">
            <div className="form-group">
                <label for="weightGoal">Distance</label>
                <div className="input-group">
                    <input
                      type="number"
                      min={0}
                      className="form-control"
                      id="weightGoal"
                      placeholder=""
                      required value={this.state.goalDistance}
                      onChange={this.handleChange.bind(this, "goalDistance")}
                    />
                    <div className="input-group-addon">Miles</div>
                </div>
            </div>

        </div>

        <div className="col-md-4">
            <div className="form-group">
                <label for="goalDate">Goal Completion Date</label>
                  <DatePicker className="form-control date-picker"
                       selected={this.state.endDate}
                       onChange={this.handleDate.bind(this, "endDate")}  />
                </div>
        </div>

        <center><button type="submit" className="btn btn-primary form-submit"><i className="fa fa-plus-square" aria-hidden="true"></i> Add Goal</button></center>

    </div>
  </form>
    )
  }
}
