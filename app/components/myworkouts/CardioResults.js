import React from 'react';
import { deleteWorkout } from './MyWorkouts.js'

export default class CardioResults extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>???</td>
        <td>{this.props.distance}</td>
        <td>{this.props.time}</td>
        <td>{this.props.weight}</td>
        <td><button className="btn btn-danger">X</button></td>
      </tr>

    );
  }
}
