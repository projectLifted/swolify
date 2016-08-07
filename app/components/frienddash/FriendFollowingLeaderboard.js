import React from 'react';
import {Link, browserHistory} from "react-router";
import { connect } from 'react-redux';

import '../../scss/primary.scss';

class FriendFollowingLeaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFollowing: false,
    }
  }

  componentWillMount() {

    var followingArray = this.props.friend.following;
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
            <Link to={linkUrl} onClick={this.reload} className="list-group-item">
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

export default connect(state => ({user: state.user, friend: state.friend}))(FriendFollowingLeaderboard);
