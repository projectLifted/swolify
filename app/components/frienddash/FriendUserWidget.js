import React from 'react';
import {Link, browserHistory} from "react-router";
import moment from 'moment';

import '../../scss/primary.scss';

export default class FriendUserWidget extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {

    let birthAge = moment().diff(this.props.thisFriend.birthDate, 'years');
    let lastSignedIn = moment(this.props.thisFriend.updated).fromNow();
    let profileImg = {
            backgroundImage: `url("${this.props.thisFriend.profilePicture}")`,
            backgroundPosition: 'center',
    };


    return (

      <div className="panel panel-default" id="user-widget">

        <div className="panel-heading"><center>
          <i className="fa fa-user" aria-hidden="true"></i> {this.props.thisFriend.firstName} {this.props.thisFriend.lastName}</center>
        </div>

        <div style={profileImg} className="profile-img"></div>
        <div className="user-widget-content">
          <p>Age: {birthAge}</p>
          <p>Weight: {this.props.thisFriend.startWeight} lbs</p>
          <p>Height: {this.props.thisFriend.heightFeet} ft {this.props.thisFriend.heightInches} in</p>
          <p>Body Type: {this.props.thisFriend.bodyType}</p>
          <p>Location: {this.props.thisFriend.location}</p>
          <p>Last Login: {lastSignedIn}</p>

        </div>

      </div>
    );
  }
}
