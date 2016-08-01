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

      <Accordion className="chart-widget">
          <Panel header={this.props.title} eventKey="1">
              <div className="chart-frame">
                <iframe src="http://localhost:8080/api/testchart" />
              </div>
          </Panel>
     </Accordion>


    );
  }
}
