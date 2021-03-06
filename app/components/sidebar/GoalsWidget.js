import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import { getUserGoals } from '../../services/goalService';

import GoalResults from './GoalResults'

import '../../scss/primary.scss';

class GoalsWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goals: [],
      noGoals: false
    }
  }


  componentWillMount() {

    new Promise((resolve, reject) => {
      getUserGoals(this.props.user._id, resolve, reject);
    }).then((res, err) => {
      if (err) { return }
      else if (res.body.length === 0) {
          this.setState({
            noGoals: true
          })
      }

        this.setState({
          goals: res.body
        })

  })
}


  render() {

    const goalData = this.state.goals.map((goal) => (
      <GoalResults
        key={goal._id}
        id={goal._id}
        name={goal.goalName}
        type={goal.goalType}
        max={goal.goalMaxProgress}
        time={goal.goalTimeProgress}
      />
    ))

    return (
      <div className="panel panel-default" id="goals-widget">

          <div className="panel-heading">
              <center><i className="fa fa-tasks" aria-hidden="true"></i> Goals Progress</center>
          </div>


          <table className="table">

            { this.state.noGoals ?

            <center><strong><p>You have no goals! Please make some.</p></strong></center>

            :

            <tbody>
              <tr>
                  <td>
                      <b>Goal</b>
                  </td>
                  <td>
                      <b>% Done</b>
                  </td>
              </tr>

              {goalData}

              </tbody>

              }
          </table>
      </div>

    );
  }
}

export default connect(state => ({user: state.user, goals: state.goals}))(GoalsWidget)
