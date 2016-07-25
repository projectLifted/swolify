import React from 'react';

import '../../scss/primary.scss';

export default class GoalsWidget extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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

              <tr>
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
              </tr>
              </tbody>
          </table>
      </div>

    );
  }
}
