import React from 'react';
import {Accordion, Panel, ProgressBar} from 'react-bootstrap';
import {Link, browserHistory} from "react-router";
import { connect } from "react-redux";
import store from "../../store";
import { selectGoal } from "../../ducks/updateGoalDuck";

import '../../scss/primary.scss';
import running from '../../images/running.png';

export default class WeightGoalsPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  setGoalToUpdate(goalId, goalName) {
    store.dispatch(selectGoal({goalId, goalName}))
      browserHistory.push("/new-goal");
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
                  <Link to={`/edit-goal/${this.props.goalId}`} className="btn btn-info"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</Link>
                <Link to={`/post-workout/lifting/${this.props.goalId}/${this.props.title}`} className="btn btn-primary"><i className="fa fa-plus-circle" aria-hidden="true"></i> Post Workout</Link>
                </div>
              }
            </div>

          </Panel>
        </Accordion>
    );
  }
}
