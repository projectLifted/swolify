import React from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';

import { postGoal } from '../services/goalService';
import '../../scss/primary.scss';

export default class LiftingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goalName: "",
      repGoal: 0,
      weightGoal: 0,
      endDate: moment(),
    }
  }

  handleChange(field, event) {
    this.setState({[field]: event.target.value});
    console.log(event.target.value)
  }

  handleDate(field, event) {
    this.setState({
      [field]: event
    })
  }

  createGoal() {
    postGoal({
      goalType: 'Weightlifting',
      goalName: this.state.goalName,
      goalStartDate: moment(),
      goalEndDate: this.state.endDate,
      goalReps: this.state.repGoal,
      goalWeight: this.state.weightGoal
    })
  }

  render() {
    return (
      <div>
        <div className="col-md-10">
          <div className="form-group">
            <label for="goalName">Name Your Goal (example: <i>"Bench Press"</i>)</label>
            <input
              type="text"
              className="form-control"
              id="goalName"
              placeholder=""
              required
              value={this.goalName}
              onChange={this.handleChange.bind(this, this.state.goalName)}
            />
        </div>


      </div>
        <div className="col-md-3">
            <div className="form-group">


                <label for="repGoal">Rep Goal</label>
                <input
                  type="number"
                  min={0}
                  className="form-control"
                  id="repGoal"
                  placeholder=""
                  required
                  value={this.repGoal}
                  onChange={this.handleChange.bind(this, this.state.repGoal)}
                />

            </div>

        </div>

        <center>
            <button
            type="submit"
            className="btn btn-primary form-submit">
            <i className="fa fa-plus-square" aria-hidden="true" onClick={this.createGoal}></i> Add Goal
            </button>
        </center>
      </div>
    )
  }
}
