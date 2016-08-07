import React from 'react';
import {Accordion, Panel, ProgressBar} from 'react-bootstrap';
import {Link, browserHistory} from "react-router";
import { connect } from "react-redux";
import store from "../../store";
import { selectGoalToEdit } from '../../ducks/editGoalDuck';

import '../../scss/primary.scss';
import running from '../../images/running.png';

export default class WeightGoalsPanel extends React.Component {
  constructor(props) {
    super(props);
  }


  goToEditGoal(title, maxGoal, goalId) {

    store.dispatch(selectGoalToEdit({goalId, goalType: "WeightLifting", goalName: title, goalMax: maxGoal}))

    browserHistory.push(`/edit-goal/${goalId}`)

  }

  render() {
    return (
      <Accordion>
          <Panel header={this.props.title} eventKey="1">
              <p>Goal Progress:</p>
              <div>
                {
                  this.props.progress >= 100 ?
                  <div>
                    <strong><p>You achieved your rep max goal of {this.props.maxRepGoal} lbs! Update your goal now.</p></strong>
                  </div>
                  :
                  <div>
                  <ProgressBar bsStyle="success" now={this.props.progress} label={`${this.props.progress}%`} />
                  <p className="extra-bottom">Rep max goal: {this.props.maxRepGoal} lbs</p>
                  <button onClick={this.goToEditGoal.bind(this, this.props.title, this.props.maxRepGoal, this.props.goalId)} className="btn btn-info"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
                <Link to={`/post-workout/lifting/${this.props.goalId}/${this.props.title}`} className="btn btn-primary"><i className="fa fa-plus-circle" aria-hidden="true"></i> Post Workout</Link>
                </div>
              }
            </div>

          </Panel>
        </Accordion>
    );
  }
}
