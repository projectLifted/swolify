import React from 'react';
import {Accordion, Panel, ProgressBar} from 'react-bootstrap';
import {Link, browserHistory} from "react-router";
import store from "../../store";
import { selectGoalToEdit } from '../../ducks/editGoalDuck';

import '../../scss/primary.scss';

import gym from '../../images/gym.png';

export default class CardioGoalsPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  setGoalToUpdate(goalId, goalName) {
    store.dispatch(selectGoal({goalId, goalName}))
      browserHistory.push("/new-goal");
  }

  goToEditGoal(goalId, title, goalMileTime, goalDistance) {
    console.log()
    store.dispatch(selectGoalToEdit({goalId, goalType: "Cardio", goalName: title, goalMileTime, goalDistance}));

    browserHistory.push(`/edit-goal/${this.props.goalId}`);
  }

  render() {

    return (
      <Accordion>
          <Panel header={this.props.title} eventKey="1">

              { this.props.distanceProgress >= 100 ?

                <div>
                  <strong><p>You achieved your distance goal of {this.props.mileTimeGoal} miles! Update your goal now.</p></strong>

                </div>

              :
                <span>
                  <p>Distance Progress:</p>
                  <ProgressBar bsStyle="success" now={this.props.distanceProgress} label={`${this.props.distanceProgress}%`} />
                </span>

              }

              { this.props.timeProgress >= 100 ?

                <div>
                  <strong><p>You achieved your goal of {this.props.mileTimeGoal} minutes per mile! Update your goal now.</p></strong>
                </div>

              :
                <span>
                  <p>Mile Time Progress:</p>
                  <ProgressBar bsStyle="success" now={this.props.timeProgress} label={`${this.props.timeProgress}%`} />
                </span>

              }

              <p>Avg Distance: {this.props.avgDistance}</p>
              <p className="extra-bottom">Avg Mile Time: {this.props.mileMinutes} Minutes</p>
              <button onClick={this.goToEditGoal.bind(this, this.props.goalId, this.props.title, this.props.mileTimeGoal, this.props.distanceGoal)} className="btn btn-info"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
              <Link to={`/post-workout/cardio/${this.props.goalId}/${this.props.title}`} className="btn btn-primary"><i className="fa fa-plus-circle" aria-hidden="true"></i> Post Workout</Link>
          </Panel>
      </Accordion>
    );
  }
}
