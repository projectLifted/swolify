import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { createWorkout } from '../../services/workoutService';
import '../../scss/primary.scss';


export default class WeightWorkoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workoutDate: moment(),
      workoutReps: 0,
      workoutWeight: 0,
      sets: []
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

  handleSubmit(event) {
    event.preventDefault();
    let runningTotal = 0;
    for (let i = 0; i < this.state.sets.length; i++) {
      runningTotal += (this.state.sets[i].weight / (1.0278 - (0.0278 * this.state.sets[i].reps)));
    }
    let weightedOneRepMax = Math.floor((runningTotal / this.state.sets.length) / 5.0) * 5;
    createWorkout({
      workoutDate: this.state.workoutDate,
      workoutMax: weightedOneRepMax,
    }, "579afb1c3adf46fc1144b1d1");
  }

  submitSet(event) {
    if (this.state.workoutReps && this.state.workoutWeight) {
     this.setState({sets: this.state.sets.concat([{setNumber: this.state.sets.length + 1, reps: this.state.workoutReps, weight: this.state.workoutWeight}])})
   }
  }

  render() {
    const sets = this.state.sets.map((set) => (
      <tr key={set.setNumber}>
          <td>
            {set.setNumber}
          </td>
          <td>
              {set.reps}
          </td>
          <td>
              {set.weight}
          </td>
      </tr>
    ))
    return (
      <div className="row">

          <div className="col-md-4">
            <div className="form-group">
              <label for="repGoal">Reps</label>

            <input
              type="number"
              className="form-control"
              id="workoutReps"
              placeholder=""
              required
              value={this.workoutReps}
              onChange={this.handleChange.bind(this, "workoutReps")}
            />
          </div>

        </div>

          <div className="col-md-4">
              <div className="form-group">
                  <label for="weightGoal">Weights</label>
                  <div className="input-group">
                      <input
                      type="number"
                      min={0} step={5}
                      className="form-control"
                      id="workoutWeight"
                      placeholder=""
                      required
                      value={this.workoutWeight}
                      onChange={this.handleChange.bind(this, "workoutWeight")}
                  />
                      <div className="input-group-addon">Lbs</div>
                  </div>
              </div>
          </div>

          <div className="col-md-4">

            <button
              type="submit"
              className="btn btn-success form-submit"
              onClick={this.submitSet.bind(this)}
              id="add-set"
              >
              <i className="fa fa-plus-square" aria-hidden="true"></i> Add Set
            </button>
          </div>



          <form id="new-goal-form" onSubmit={this.handleSubmit.bind(this)}>

            <div className="row">
              <div className="col-md-10">

                <table className="table" id="set-table">
                  <tbody>
                    <tr>
                        <td>
                            <b>Set Number</b>
                        </td>
                        <td>
                          <b>Number of Reps</b>
                        </td>
                        <td>
                            <b>Weight</b>
                        </td>
                    </tr>
                    {sets}

                    </tbody>
                </table>
            </div>
          </div>


          <div className="col-md-3"></div>
          <div className="col-md-4">
              <div className="form-group">
                  <label for="goalDate">Workout Date</label>
                    <DatePicker
                       className="form-control date-picker"
                       selected={this.state.workoutDate}
                       onChange={this.handleDate.bind(this, "workoutDate")}
                    />
                  </div>



          <div className="updateWorkoutCredentials">
            <center>
                  <button
                    type="submit"
                    onClick={this.submitWorkout}
                    className="btn btn-primary form-submit"
                    >
                    <i className="fa fa-plus-square" aria-hidden="true"></i> Post Workout
                  </button>
                </center>
            </div>
          </div>

          <div className="col-md-3"></div>


          </form>

      </div>
    )
  }

}
