import React from 'react';
import { browserHistory } from 'react-router';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { updateGoal } from '../../services/goalService';
import DeleteGoalModal from './DeleteGoalModal';
import '../../scss/primary.scss';

export default class EditCardioForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      goalName: this.props.goal.goalName,
      goalMileTime: this.props.goal.goalMileTime,
      goalDistance: this.props.goal.goalDistance
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
    updateGoal({
      goalName: this.state.goalName,
      goalDistance: this.state.goalDistance,
      goalMileTime: this.state.goalMileTime
    }, this.props.goal._id)
      browserHistory.push("/dashboard");
  }

  componentWillReceiveProps(){
     this.setState({

     })
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
                <label for="weightGoal">Goal Mile Time</label>
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
                <label for="weightGoal">Goal Distance</label>
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

        <div className="row">

          <div className="col-md-10">

            <center><button type="submit" className="btn btn-info form-submit" id="edit-goal-button"><i className="fa fa-plus-square" aria-hidden="true"></i> Save Changes</button>

            <DeleteGoalModal goalId={this.props.goal._id} show={this.state.show} /></center>


          </div>

        </div>

    </div>
  </form>
    )
  }
}
