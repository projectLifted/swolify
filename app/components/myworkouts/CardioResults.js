import React from 'react';
import { connect } from 'react-redux';
import { deleteWorkout } from '../../services/workoutService';

class CardioResults extends React.Component {
  constructor(props) {
    super(props);

  }

  deleteWorkout() {
    deleteWorkout(this.props.goalId, this.props.workoutId);
  }

  render() {
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.goalName}</td>
        <td>{this.props.distance}</td>
        <td>{this.props.time}</td>
        <td>{this.props.weight}</td>
        <td><button onClick={this.deleteWorkout.bind(this)} className="btn btn-danger">X</button></td>
      </tr>

    );
  }
}

export default connect(state => ({user: state.user, goals: state.goals, workouts: state.workouts}))(CardioResults);
