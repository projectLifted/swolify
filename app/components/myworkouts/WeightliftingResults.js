import React from 'react';
import { deleteWorkout } from './MyWorkouts.js'

export default class WeightliftingResults extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

console.log(deleteWorkout);

    return (
      <tr>
        <td>{this.props.date}</td>
        <td>???</td>
        <td>{this.props.max}</td>
        <td>{this.props.weight}</td>
        <td><button className="btn btn-danger">X</button></td>
      </tr>

    );
  }
}
