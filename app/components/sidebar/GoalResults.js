import React from 'react';
import { connect } from 'react-redux';


class GoalResults extends React.Component {
  constructor(props) {
    super(props);

  }

  deleteWorkout() {
    deleteWorkout(this.props.goalId, this.props.workoutId);
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.name}
        </td>
        <td>
          {this.props.type === "WeightLifting"
          ?
            <span>{this.props.max}</span>
          :
            <span>{this.props.time}</span>
          }
        </td>
      </tr>
    );
  }
}


export default connect(state => ({user: state.user, goals: state.goals}))(GoalResults);
