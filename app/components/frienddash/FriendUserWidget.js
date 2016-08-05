import React from 'react';
import {Link, browserHistory} from "react-router";
import moment from 'moment';

import '../../scss/primary.scss';

export default class FriendUserWidget extends React.Component {
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
          <p>Body Type: {this.props.user.bodyType}</p>
          <p>Location: {this.props.user.location}</p>
          <p>Last Login: {lastSignedIn}</p>

        </div>
  
      </div>
    );
  }
}
