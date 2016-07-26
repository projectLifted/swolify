import React from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class CardioWorkoutForm extends React.Component {
  constructor(props) {
    super(props);

  }

  this.state = {
    workoutDate: moment(),
    workoutDistance: 0,
    workoutTime: 0,
    percentMileTimeChange: 0
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

  }

  render() {
    return (
      <div>

        <div className="col-md-10">
        <h2>Bench Press</h2> {/* Will eventually become this.props.workoutName */}
          <label>Performance:</label>
      </div>

      <div className="col-md-3">
        <div className="form-group">
          <label for="repGoal">Reps</label>
          <input
            type="number"
            className="form-control"
            id="repGoal"
            placeholder=""
            required
            value={this.workoutReps}
            onChange={this.handleChange.bind(this, this.state.workoutReps)}
          />
        </div>
      </div>

      <div className="col-md-3">
          <div className="form-group">
              <label for="weightGoal">Weights</label>
              <div className="input-group">
                  <input
                    type="number"
                    min={0} step={5}
                    className="form-control"
                    id="weightGoal"
                    placeholder=""
                    required
                    value={this.weightGoal}
                    onChange={this.handleChange.bind(this, this.state.weightGoal)}
                  />
                  <div className="input-group-addon">Lbs</div>
              </div>
          </div>

      </div>

      <div className="col-md-4">
          <div className="form-group">
              <label for="goalDate">Workout Date</label>
                <DatePicker
                   className="form-control date-picker"
                   selected={this.state.workoutDate}
                   onChange={this.handleDate.bind(this, "performanceDate")}
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
