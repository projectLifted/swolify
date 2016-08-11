import React from 'react';
import { connect } from 'react-redux';
import {Link, browserHistory} from "react-router";
import moment from 'moment';

import '../../scss/primary.scss';

class FriendUserWidget extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {

    let birthAge = moment().diff(this.props.friend.birthDate, 'years');
    let lastSignedIn = moment(this.props.friend.updated).fromNow();
    let profileImg = {
            backgroundImage: `url("${this.props.friend.profilePicture}")`,
            backgroundPosition: 'center',
    };


    return (

      <div className="panel panel-default" id="user-widget">

        <div className="panel-heading"><center>
          <i className="fa fa-user" aria-hidden="true"></i> {this.props.friend.firstName} {this.props.friend.lastName}</center>
        </div>

        <div style={profileImg} className="profile-img"></div>
        <div className="user-widget-content">
          <p>Age: {birthAge}</p>
          <p>Weight: {this.props.friend.startWeight} lbs</p>
          <p>Height: {this.props.friend.heightFeet} ft {this.props.friend.heightInches} in</p>
          <p>Location: {this.props.friend.location}</p>
          <p>Last Login: {lastSignedIn}</p>

        </div>

      </div>
    );
  }
}

export default connect(state => ({user: state.user, friend: state.friend}))(FriendUserWidget);
