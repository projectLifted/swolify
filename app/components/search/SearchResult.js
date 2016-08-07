import React from 'react';
import moment from 'moment';
import { putFriend, putUser } from '../../services/userService';
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

    var followingArray = this.props.user.following;
    for (var i = 0; i < followingArray.length; i++) {
      if ( followingArray[i] === this.props.users._id )  {
        this.setState({ isFollowing : true })
      }
    }

  }


  unfollow(){

      let newFollowingArray = this.props.user.following;
      let followIndex = newFollowingArray.indexOf(this.props.id);
      newFollowingArray.splice(followIndex, 1);

      putFriend({
        _id: this.props.user._id,
        following: newFollowingArray
      }, newFollowingArray, this.props.user._id);

      this.setState({isFollowing: false});


  }

  follow(){

      let newFollowingArray = this.props.user.following;
      newFollowingArray.push(this.props.id);

      putFriend({
        _id: this.props.user._id,
        following: newFollowingArray
      }, newFollowingArray, this.props.user._id);

      this.setState({isFollowing: true});

  }




  render() {
    const profileImg = {
      backgroundImage: `url("${this.props.pic}")`
    };

    const birthAge = moment().diff(this.props.age, 'years');

    /* Want to get a list of the authed user's following array -x
    Should loop through that array -x
    Loop through all other user's ids and compare the values
    If another user's id is not found in the authed user's following array,
    then push said id into the the following array */

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
          <div style={profileImg} className="friend-photo"></div>
          <div className="list-group-content">
            <Link to={linkUrl}><h4 className="list-group-item-heading">{this.props.name}</h4>      </Link>
            <p className="list-group-item-text">
              {birthAge} years old, {this.props.weight} lbs, {this.props.heightFeet} ft {this.props.heightInches}, in {this.props.location}
            </p>

          </div>
          <div className="list-group-btn-box">
          { this.state.isFollowing
            ?
              <button className="btn btn-primary" onClick={this.unfollow.bind(this)}><i className="fa fa-user-times" aria-hidden="true" ></i> Unfollow</button>
            :
              <button className="btn btn-info" onClick={this.follow.bind(this)}><i className="fa fa-user-plus" aria-hidden="true"></i> Follow</button>
          }
          </div>
        </div>
    </div>

    );
  }
}


export default connect(state => ({user: state.user}))(SearchResult);
