import React from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class CardioForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment(),
    }
  }

  handleDate(field, event) {
    this.setState({
      [field]: event
    })
  }

  render() {
    return (
      <div>
        <div className="col-md-10">
      <div className="form-group">
          <label for="goalName">Name Your Goal (example: <i>"Running"</i>)</label>
          <input type="text" className="form-control" id="goalName" placeholder="" required />
      </div>
    </div>

        <div className="col-md-3">
            <div className="form-group">
                <label for="weightGoal">Time</label>
                <div className="input-group">
                    <input type="number" min={0} className="form-control" id="weightGoal" placeholder="" required />
                    <div className="input-group-addon">Minutes</div>
                </div>
            </div>

        </div>

        <div className="col-md-3">
            <div className="form-group">
                <label for="weightGoal">Distance</label>
                <div className="input-group">
                    <input type="number" min={0} className="form-control" id="weightGoal" placeholder="" required />
                    <div className="input-group-addon">Miles</div>
                </div>
            </div>

        </div>

        <div className="col-md-4">
            <div className="form-group">
                <label for="goalDate">Goal Completion Date</label>
                  <DatePicker className="form-control date-picker"
                       selected={this.state.startDate}
                       onChange={this.handleDate.bind(this, "startDate")}  />
                </div>
        </div>

        <center><button type="submit" className="btn btn-primary form-submit"><i className="fa fa-plus-square" aria-hidden="true" onClick={this.createGoal}></i> Add Goal</button></center>

    </div>
    )
  }
}
