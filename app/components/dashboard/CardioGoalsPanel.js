import React from 'react';
import {Accordion, Panel, ProgressBar} from 'react-bootstrap';
import {Link, browserHistory} from "react-router";

import '../../scss/primary.scss';

import gym from '../../images/gym.png';

export default class CardioGoalsPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Accordion>
          <Panel header={this.props.title} eventKey="1">
              <p>Distance Progress:</p>
              <ProgressBar bsStyle="success" now={this.props.distanceProgress} label={`${this.props.distanceProgress}%`} />
              <p>Mile Time Progress:</p>
              <ProgressBar bsStyle="success" now={this.props.timeProgress} label={`${this.props.timeProgress}%`} />
              <p>Avg Distance: {this.props.avgDistance}</p>
              <p>Avg Mile Time: {this.props.mileMinutes} Minutes and {this.props.mileSeconds} Seconds</p>
              <Link to={`/edit-goal/${this.props.goalId}`} className="btn btn-info"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</Link>
              <Link to={`/post-workout/cardio/${this.props.goalId}/${this.props.title}`} className="btn btn-primary"><i className="fa fa-plus-circle" aria-hidden="true"></i> Post Workout</Link>
          </Panel>
      </Accordion>
    );
  }
}
