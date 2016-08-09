import React from 'react';
import {Link, browserHistory} from "react-router";
import { connect } from 'react-redux';

import '../../scss/primary.scss';

class FollowingLeaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFollowing: false,
    }
  }

  render() {

    let isFollowing = false;

    var followingArray = this.props.following.following;
    for (var i = 0; i < followingArray.length; i++) {
    if ( followingArray[i]._id === this.props.followId )  {
        isFollowing = true;
      }
    }


    const profileImg = {
      backgroundImage: `url("${this.props.profilePicture}")`
    };

    const linkUrl = `/friend-dash/${this.props.followId}`;


    return (

      <div>
        { isFollowing
          ?
            <Link to={linkUrl} className="list-group-item">
                <div style={profileImg} className="following-pic"></div>
                <div className="following-name">{this.props.firstName} {this.props.lastName}</div>
            </Link>
          :
            <span></span>
          }
      </div>

    );
  }
}

export default connect(state => ({user: state.user, goals: state.goals, following: state.following}))(FollowingLeaderboard);
