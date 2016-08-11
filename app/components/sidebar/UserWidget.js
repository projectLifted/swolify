import React from 'react';
import {Link, browserHistory} from "react-router";
import moment from 'moment';
import { connect } from 'react-redux';

import '../../scss/primary.scss';
// import profilePic from  'https://www.filestackapi.com/api/file/E6Yx55BT2G1NmiuH34rQ';

class UserSidebar extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {

    let birthAge = moment().diff(this.props.user.birthDate, 'years');
    let lastSignedIn = moment(this.props.user.updated).fromNow();
    let profileImg = {
            backgroundImage: `url("${this.props.user.profilePicture}")`,
            backgroundPosition: 'center',
    };


    return (

      <div className="panel panel-default" id="user-widget">

        <div className="panel-heading"><center>
          <i className="fa fa-user" aria-hidden="true"></i> {this.props.user.firstName} {this.props.user.lastName}</center>
        </div>

        <div style={profileImg} className="profile-img"></div>
        <div className="user-widget-content">
          <p>Age: {birthAge}</p>
          <p>Weight: {this.props.user.startWeight} lbs</p>
          <p>Height: {this.props.user.heightFeet} ft {this.props.user.heightInches} in</p>
          <p>Location: {this.props.user.location}</p>
          <p>Last Login: {lastSignedIn}</p>

        </div>
      <div className="widget-footer">

        <Link to="/edit-profile"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Profile</Link>
        <Link to="/workouts"><i className="fa fa-search" aria-hidden="true"></i> My Workouts</Link>
      </div>
      </div>
    );
  }
}

export default connect(state => ({user: state.user}))(UserSidebar);
