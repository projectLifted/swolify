import React from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import { createGoal } from '../../services/goalService';
import { getAuth } from '../../services/loginService.js';

import DeleteGoalModal from '../editgoal/DeleteGoalModal';

export default class EditCardioForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      endDate: moment(),
      goalName: "",
      goalDistance: 0,
      goalMileTime: 0
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

    createGoal({
      goalType: "WeightLifting",
      goalName: this.state.goalName,
      goalStartDate: moment,
      goalEndDate: this.state.endDate,
      goalDistance: this.state.goalDistance,
      workouts: [],
      goalOwner: this.props.user._id
    }).then((res, err) => {
      if (err) {
        return console.error(err);
      }
      console.log(res);
    });
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
                <label for="weightGoal">Mile Time</label>
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
                <label for="weightGoal">Distance</label>
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

        <div className="col-md-4">
            <div className="form-group">
                <label for="goalDate">Goal Completion Date</label>
                  <DatePicker className="form-control date-picker"
                       selected={this.state.endDate}
                       onChange={this.handleDate.bind(this, "endDate")}  />
                </div>
        </div>

        <div className="col-md-10">

          <div className="edit-buttons">
            <button type="submit" className="btn btn-info form-submit"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Save Changes</button>

            <DeleteGoalModal />
          </div>
        </div>
    </div>
  </form>
    )
  }
}
