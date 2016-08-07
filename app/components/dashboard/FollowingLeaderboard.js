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

  componentWillMount() {

    var followingArray = this.props.user.following;
    for (var i = 0; i < followingArray.length; i++) {
      if ( followingArray[i] === this.props.followId )  {
        this.setState({ isFollowing : true })
      }
    }

  }

  render() {
    const profileImg = {
      backgroundImage: `url("${this.props.profilePicture}")`
    };

    const linkUrl = `/friend-dash/${this.props.followId}`;


    return (

      <div>
        { this.state.isFollowing
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

export default connect(state => ({user: state.user, goals: state.goals}))(FollowingLeaderboard);
