import React from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import { postWorkout } from '../../workoutService';

export default class LiftWorkoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workoutDate: moment(),
      workoutReps: 0,
      workoutWeight: 0,
      percentRepChange: 0,  // Must be calculated based on previous workouts
      percentWeightChange: 0  // Must be calculated based on previous workouts
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
    postWorkout({

    })
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
                      value={this.workoutWeight}
                      onChange={this.handleChange.bind(this, this.state.workoutWeight)}
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

      {/*<div className="col-md-3">
          <div className="form-group">
                <label for="weightGoal">Weight Goal</label>
              <div className="input-group">
                  <input type="number" className="form-control" id="weightGoal" placeholder="" />
                  <div className="input-group-addon">Lbs</div>
              </div>
          </div>
          </div>*/}

      </div>
    )
  }

}
