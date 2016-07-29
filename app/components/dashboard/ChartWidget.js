import React from 'react';
import {Accordion, Panel, ProgressBar} from 'react-bootstrap';

import '../../scss/primary.scss';

import gym from '../../images/gym.png';
import running from '../../images/running.png';

export default class ChartWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className="panel panel-default graph-box">
        <div className="panel-heading"><i className="fa fa-line-chart" aria-hidden="true"></i> {this.props.title}</div>
        <div className="panel-body">D3 Chart</div>
      </div>

    );
  }
}
