import React from 'react';
import moment from 'moment';
import { putFriend, putUser } from '../../services/userService';
import { addUserToFollowing, removeFromFollowing } from '../../services/userService';
import { connect } from 'react-redux';
import {Link, browserHistory} from 'react-router';
import store from '../../store';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFollowing: false
    }
  }


  componentWillMount() {
    console.log(this.props.users);

    var followingArray = this.props.following.following;
    for (var i = 0; i < followingArray.length; i++) {
      if ( followingArray[i]._id === this.props.users._id )  {
        this.setState({ isFollowing : true })
      }
    }

  }

  handleFollow(followId) {
    console.log(followId);
    this.setState({
      isFollowing: true
    });
    addUserToFollowing(this.props.user._id, followId);
  }

  handleUnfollow(unfollowId) {

    this.setState({
      isFollowing: false
    });
    removeFromFollowing(this.props.user._id, unfollowId);
  }




  render() {
    const profileImg = {
      backgroundImage: `url("${this.props.pic}")`
    };

    const birthAge = moment().diff(this.props.age, 'years');


    const arrCheck = () => {
      let followingArray = this.props.authUser.following;

      for (var i = 0; i < followingArray.length; i++) {
        console.log(followingArray[i]);
        console.log(this.props.users._id);
          if (followingArray[i] !== this.props.users._id) {
              followingArray.push(this.props.users._id);
          }
      }
      return followingArray;
    }

    const linkUrl = `/friend-dash/${this.props.id}`;


    return (
      <div>


        <div className="list-group-item">
          <div className="friend-photo-box"><div style={profileImg} className="friend-photo"></div></div>
          <div className="list-group-content">
            <Link to={linkUrl}><h4 className="list-group-item-heading">{this.props.name}</h4>      </Link>
              { this.state.isFollowing
                ?
                  <button className="btn btn-primary" onClick={this.handleUnfollow.bind(this, this.props.id)}><i className="fa fa-user-times" aria-hidden="true" ></i> Unfollow</button>
                :
                  <button className="btn btn-info" onClick={this.handleFollow.bind(this, this.props.id)}><i className="fa fa-user-plus" aria-hidden="true"></i> Follow</button>
              }
            <p className="list-group-item-text">
              {birthAge} years old, {this.props.weight} lbs, {this.props.heightFeet} ft {this.props.heightInches}, in {this.props.location}
            </p>

          </div>

        </div>
    </div>

    );
  }
}


export default connect(state => ({user: state.user, following: state.following}))(SearchResult);
