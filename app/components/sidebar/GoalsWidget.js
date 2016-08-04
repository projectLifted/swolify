import React from 'react';
import { connect } from 'react-redux';

import '../../scss/primary.scss';

class GoalsWidget extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    console.log(this.props.goals);

  }


  render() {
    const goalData = this.props.goals.goals.map((goal) => (
      <tr>
        <td>
          {goal.goalName}
        </td>
        <td>
          {goal.goalMaxProgress}%
        </td>
      </tr>
    ))

    return (
      <div className="panel panel-default" id="goals-widget">

          <div className="panel-heading">
              <center><i className="fa fa-tasks" aria-hidden="true"></i> Goals Progress</center>
          </div>


          <table className="table">
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

              {/*<tr>
                  <td>
                      Bench Press
                  </td>
                  <td>
                      86%
                  </td>
              </tr>

              <tr>
                  <td>
                      Squats
                  </td>
                  <td>
                      70%
                  </td>
              </tr>

              <tr>
                  <td>
                      Pullups
                  </td>
                  <td>
                      26%
                  </td>
              </tr>


              <tr>
                  <td>
                      Body Weight
                  </td>
                  <td>
                      23%
                  </td>
              </tr>

              <tr>
                  <td>
                      Cycling
                  </td>
                  <td>
                      50%
                  </td>
              </tr>*/}
              </tbody>
          </table>
      </div>

    );
  }
}

export default connect(state => ({goals: state.goals}))(GoalsWidget)
