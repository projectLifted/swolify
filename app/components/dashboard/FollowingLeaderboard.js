import React from 'react';
import {Link, browserHistory} from "react-router";

import '../../scss/primary.scss';

export default class FollowingLeaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFollowing: false,
    }
  }

  componentWillMount() {

    var followingArray = this.props.authUser.following;
    for (var i = 0; i < followingArray.length; i++) {
      if ( followingArray[i] === this.props.users._id )  {
        this.setState({ isFollowing : true })
      }
    }

  }

  render() {
    const profileImg = {
      backgroundImage: `url("${this.props.pic}")`
    };

    const linkUrl = `/friend-dash/${this.props.userId}`;


    return (

      <div>
        { this.state.isFollowing
          ?
            <Link to={linkUrl} className="list-group-item">
                <div style={profileImg} className="following-pic"></div>
                <div className="following-name">{this.props.name}</div>
            </Link>
          :
            <span></span>
          }
      </div>

    );
  }
}
