import React from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';

import '../../scss/primary.scss';
import { postGoal } from '../../services/goalService';

export default class LiftingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goalType: "weightlifting",
      goalName: "",
      repGoal: 0,
      weightGoal: 0,
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

      let goal = {
        goalType: "weightlifting",
        goalName: this.state.goalName,
        goalStartDate: moment(),
        goalEndDate: this.state.endDate,
        goalReps: this.state.repGoal,
        goalWeight: this.state.weightGoal,
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


                <label for="repGoal">Rep Goal</label>
                <input type="number" min={0} className="form-control" id="repGoal" placeholder="" required
                value={this.state.repGoal}
                onChange={this.handleChange.bind(this, "repGoal")}
                />
            </div>

        </div>

        <div className="col-md-3">
            <div className="form-group">
                <label for="weightGoal">Weight Goal</label>
                <div className="input-group">
                    <input
                      type="number"
                      min={0}
                      step={5}
                      className="form-control"
                      id="weightGoal"
                      placeholder=""
                      required
                      value={this.state.weightGoal}
                      onChange={this.handleChange.bind(this, "weightGoal")}
                    />

                    <div className="input-group-addon">Lbs</div>
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
