import React from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';

import { getAuth } from '../../services/loginService.js';
import '../../scss/primary.scss';
import { createGoal } from '../../services/goalService';

export default class LiftingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goalType: "weightlifting",
      goalName: "",
      goalMax: 0,
      endDate: moment(),
    }
  }

  componentWillMount() {
    new Promise((resolve, reject) => {
      getAuth(resolve, reject);
    }).then((res, err)=> {
      if (err){
      }
      else if(res.body === false){
        browserHistory.push('/');
      }
      else {
        this.setState({user: res.body})
        console.log(this.state.user);
      }
    })
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

      createGoal({
        goalType: "WeightLifting",
        goalName: this.state.goalName,
        goalStartDate: moment,
        goalEndDate: this.state.endDate,
        goalMax: this.state.max,
        workouts: [],
        goalOwner: this.props.userId
      }).then((res, err) => {
        if (err) {
          return console.error(err);
        }
        console.log(res);
      })
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

        <div className="col-md-6">
            <div className="form-group">
                <label for="weightGoal">Max Goal</label>
                <div className="input-group">
                    <input
                      type="number"
                      min={0}
                      step={5}
                      className="form-control"
                      id="goalMax"
                      placeholder=""
                      required
                      value={this.state.goalMax}
                      onChange={this.handleChange.bind(this, "goalMax")}
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
