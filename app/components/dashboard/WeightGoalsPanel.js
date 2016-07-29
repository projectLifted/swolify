import React from 'react';
import {Accordion, Panel, ProgressBar} from 'react-bootstrap';

import '../../scss/primary.scss';

import gym from '../../images/gym.png';
import running from '../../images/running.png';

export default class WeightGoalsPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let now = 22;

    return (

    <div id="goals-panel">

    <div id="weightlifting-goals">
    <h2><img src={gym} /> Weightlifting Goals</h2>

          <Accordion>
              <Panel header="Bench Press" eventKey="1">
                  <p>Goal Progress:</p>
                  <ProgressBar bsStyle="success" now={now} label={`${now}%`} />
                  <button className="btn btn-info"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
                  <button className="btn btn-primary"><i className="fa fa-plus-circle" aria-hidden="true"></i> Post Workout</button>
              </Panel>
              <Panel header="Overhead Press" eventKey="2">
                  <p>Goal Progress:</p>
                  <ProgressBar bsStyle="success" now={now} label={`${now}%`} />
                  <button className="btn btn-info"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
                  <button className="btn btn-primary"><i className="fa fa-plus-circle" aria-hidden="true"></i> Post Workout</button>
              </Panel>
              <Panel header="Squats" eventKey="3">
                  <p>Goal Progress:</p>
                  <ProgressBar bsStyle="success" now={now} label={`${now}%`} />
                  <button className="btn btn-info"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
                  <button className="btn btn-primary"><i className="fa fa-plus-circle" aria-hidden="true"></i> Post Workout</button>
              </Panel>
          </Accordion>

          </div>

        </div>
    );
  }
}
