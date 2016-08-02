import React from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import { createWorkout } from '../../services/workoutService';

export default class CardioWorkoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workoutDate: moment(),
      workoutDistance: 0,
      workoutMinutes: 0,
      workoutSeconds: 0,
      percentMileTimeChange: 0
    }

  }
  handleChange(field, event) {
    this.setState({[field]: event.target.value});
  }

  handleDate(field, event) {
    this.setState({
      [field]: event
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let timeDecimalVal = (this.state.workoutSeconds / 60);
    let workoutMileTime = ((parseFloat(this.state.workoutMinutes) + parseFloat(timeDecimalVal)).toFixed(2) / this.state.workoutDistance);
    console.log(workoutMileTime);
    createWorkout({
      workoutDate: this.state.workoutDate.format("YYYY, MM, DD"),
      workoutDistance: this.state.workoutDistance,
      workoutMileTime: workoutMileTime
    })
      browserHistory.push("/dashboard");
  }

  render() {
    return (
      <form id="new-goal-form" onSubmit={this.handleSubmit.bind(this)}>
        <div>
        <div className="col-md-10">
      <h2>{this.props.goalName}</h2>
      </div>

      <div className="col-md-3">
        <div className="form-group">
          <label for="repGoal">Minutes</label>
          <input
            type="number"
            className="form-control"
            id="workoutMinutes"
            placeholder=""
            min={0}
            required
            value={this.workoutMinutes}
            onChange={this.handleChange.bind(this, "workoutMinutes")}
          />
        </div>
      </div>
      <div className="col-md-3">
        <div className="form-group">
          <label for="repGoal">Seconds</label>
          <input
            type="number"
            className="form-control"
            id="workoutSeconds"
            placeholder=""
            required
            min={0}
            max={59}
            value={this.workoutSeconds}
            onChange={this.handleChange.bind(this, "workoutSeconds")}
          />
        </div>
      </div>

      <div className="col-md-3">
          <div className="form-group">
              <label for="weightGoal">Distance</label>
              <div className="input-group">
                  <input
                    type="number"
                    min={0}
                    step="any"
                    className="form-control"
                    id="workoutDistance"
                    placeholder=""
                    required
                    value={this.state.workoutDistance}
                    onChange={this.handleChange.bind(this, "workoutDistance")}
                  />
                <div className="input-group-addon">Miles</div>
              </div>
          </div>

      </div>

      <div className="col-md-3">
          <div className="form-group">
              <label for="goalDate">Workout Date</label>
                <DatePicker
                   className="form-control date-picker"
                   selected={this.state.workoutDate}
                   onChange={this.handleDate.bind(this, "workoutDate")}
                />
              </div>
      </div>

        <center>
              <button
                type="submit"
                className="btn btn-primary form-submit">
                <i className="fa fa-plus-square" aria-hidden="true"></i> Post Workout
              </button>
            </center>
      </div>
    </form>
    )
  }

}
