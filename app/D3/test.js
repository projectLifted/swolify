import React from 'react';
import * as V from 'victory';

export default class PieChart extends React.Component {
  render() {
    const workoutLogs = require('dsv!./data.csv');

    // const minWeight = [];
    // const maxWeight = [];
    // workoutLogs.reduce( (prev, curr) => {
    //   return prev.weight < curr.weight ? prev : curr;
    // } );

    // console.log(prev.weight);

    return (
      <svg width={600} height={600}>
        <V.VictoryAxis
          padding={30}
          label='x-axis'
          standalone={false}
          domain={[-10, 10]}
        />
        <V.VictoryAxis dependentAxis
          padding={30}
          label='y-axis'
          standalone={false}
          domain={[-10, 10]}
        />
      </svg>
    );
  }
}
