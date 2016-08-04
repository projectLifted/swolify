import React from 'react';
import {Accordion, Panel, ProgressBar} from 'react-bootstrap';
import {Link, browserHistory} from "react-router";

import '../../scss/primary.scss';
import running from '../../images/running.png';

export default class WeightGoalsPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Accordion>
          <Panel header={this.props.title} eventKey="1">
              <p>Goal Progress:</p>
              <ProgressBar bsStyle="success" now={this.props.progress} label={`${this.props.progress}%`} />
              <Link to={`/edit-goal/${this.props.goalId}`} className="btn btn-info"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</Link>
            <Link to={`/post-workout/lifting/${this.props.goalId}/${this.props.title}`} className="btn btn-primary"><i className="fa fa-plus-circle" aria-hidden="true"></i> Post Workout</Link>
          </Panel>
        </Accordion>
    );
  }
}
