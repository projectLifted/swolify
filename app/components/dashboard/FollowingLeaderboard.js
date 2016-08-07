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

  componentDidUpdate(){
    console.log("hello from following widget", this.props.user.following)
  }


  render() {

    let isFollowing = false;

    var followingArray = this.props.user.following;
    for (var i = 0; i < followingArray.length; i++) {
      if ( followingArray[i] === this.props.users._id )  {
        isFollowing = true;
      }
    }


    const profileImg = {
      backgroundImage: `url("${this.props.pic}")`
    };

    const linkUrl = `/friend-dash/${this.props.userId}`;


    return (

      <div>
        { isFollowing
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

export default connect(state => ({user: state.user, goals: state.goals}))(FollowingLeaderboard);
