import React from 'react';
import { connect } from 'react-redux';
import { deleteWorkout } from '../../services/goalService';


class WeightliftingResults extends React.Component {
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
        <td>{this.props.max}</td>
        <td>{this.props.weight}</td>
        <td><button onClick={this.deleteWorkout.bind(this)} className="btn btn-danger">X</button></td>
      </tr>
    );
  }
}


export default connect(state => ({user: state.user, goals: state.goals}))(WeightliftingResults);
