import React from 'react';

import '../../scss/primary.scss';
// import profilePic from  'https://www.filestackapi.com/api/file/E6Yx55BT2G1NmiuH34rQ';

export default class UserSidebar extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (

      <div className="panel panel-default" id="user-widget">

        <div className="panel-heading"><center>
          <i className="fa fa-user" aria-hidden="true"></i> Paul Day</center>
        </div>

        <div className="profile-img"></div>
        <div className="user-widget-content">
          <p>Age: 33 Years Old</p>
          <p>Weight: 155 lbs</p>
          <p>Height: 5 ft 9 in</p>
          <p>Body Type: Mesomorph</p>
          <p>Location: Dallas, Texas</p>
          <p>Last Login: 3 Weeks Ago</p>

        </div>
      <div className="widget-footer">

        <a href="#"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Profile</a>
        <a href="#"><i className="fa fa-search" aria-hidden="true"></i> My Workouts</a>
      </div>
      </div>
    );
  }
}
