import React from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import { postWorkout } from '../../services/workoutService';

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

  submitWorkout() {
    let timeDecimalVal = (this.state.workoutSeconds / 60);
    let workoutTime = parseFloat((this.state.workoutMinutes + this.state.workoutSeconds).toFixed(2));

    postWorkout({
      workoutDate: this.state.workoutDate,
      workoutDistance: this.state.workoutDistance,
      workoutTime: workoutTime,
      percentMileTimeChange: /* Dependent on a formula that depends on the dashboard data */
    })
  }

  render() {
    return (
      <div>

        <div className="col-md-10">
        <h2>Jogging</h2> {/* Will eventually become this.props.workoutName */}
          <label>Performance:</label>
      </div>

      <div className="col-md-3">
        <div className="form-group">
          <label for="repGoal">Minutes</label>
          <input
            type="number"
            className="form-control"
            id="repGoal"
            placeholder=""
            required
            value={this.workoutTime}
            onChange={this.handleChange.bind(this, this.state.workoutTime)}
          />
        </div>
      </div>
      <div className="col-md-3">
        <div className="form-group">
          <label for="repGoal">Seconds</label>
          <input
            type="number"
            className="form-control"
            id="repGoal"
            placeholder=""
            required
            min={0}
            max={59}
            value={this.workoutTime}
            onChange={this.handleChange.bind(this, this.state.workoutTime)}
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
                    id="weightGoal"
                    placeholder=""
                    required
                    value={this.workoutDistance}
                    onChange={this.handleChange.bind(this, this.state.workoutDistance)}
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
                   value={this.workoutDate}
                   onChange={this.handleDate.bind(this, this.state.workoutDate)}
                />
              </div>
      </div>

        <center>
              <button
                type="submit"
                onClick={this.submitWorkout}
                className="btn btn-primary form-submit">
                <i className="fa fa-plus-square" aria-hidden="true"></i> Post Workout
              </button>
            </center>


      </div>
    )
  }

}
