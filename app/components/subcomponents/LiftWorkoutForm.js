import React from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class LiftWorkoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      endDate: moment(),
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
                     selected={this.state.endDate}
                     onChange={this.handleDate.bind(this, "performanceDate")}
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
