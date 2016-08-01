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

    let now = 22;

    return (
      <Accordion>
          <Panel header={this.props.title} eventKey="1">
              <p>Goal Progress:</p>
              <ProgressBar bsStyle="success" now={now} label={`${now}%`} />
              <p>Avg Distance: 1.2 Miles</p>
              <Link to="/" className="btn btn-info"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</Link>
              <Link to="/" className="btn btn-primary"><i className="fa fa-plus-circle" aria-hidden="true"></i> Post Workout</Link>
          </Panel>
      </Accordion>
    );
  }
}
