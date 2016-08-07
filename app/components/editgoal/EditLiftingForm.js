import React from 'react';
import { browserHistory } from 'react-router';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import store from '../../store';
import { clearGoal } from '../../ducks/editGoalDuck';
import { updateGoal } from '../../services/goalService';
import DeleteGoalModal from './DeleteGoalModal';
import '../../scss/primary.scss';

export default class EditLiftingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      goalName: this.props.goalName,
      goalMax: this.props.goalMax
    }
  }

  componentWillunMount() {
    store.dispatch(clearGoal());
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
      updateGoal({
        goalName: this.state.goalName,
        goalMax: this.state.goalMax,
      }, this.props.goalId);

        browserHistory.push("/dashboard")
  }

   //
  //  componentWillReceiveProps(){
  //     this.setState({
  //       goalName: this.props.goalName,
  //       goalMax: this.props.goalMax
  //     })
  //   }

  render() {
    console.log(this.props.goalName);

    return (
      <form id="new-goal-form" onSubmit={this.handleSubmit.bind(this)}>

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
                <label for="weightGoal">One Rep Max Goal</label>
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


        <div className="row">

          <div className="col-md-10">

            <center><button type="submit" className="btn btn-info form-submit" id="edit-goal-button"><i className="fa fa-plus-square" aria-hidden="true"></i> Save Changes</button>

            <DeleteGoalModal goalId={this.props.goalId} show={this.state.show} /></center>



          </div>

        </div>


    </form>
    )
  }
}
