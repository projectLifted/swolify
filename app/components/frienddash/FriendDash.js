import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from "react-router";
import { connect } from 'react-redux';

import { getAuth } from '../../services/loginService.js';
import { putFriend } from '../../services/userService.js';
import { getFriend, getAllUsers } from '../../services/friendService.js';

import Navigation from '../Navigation';
import Footer from '../Footer';
import FriendUserWidget from './FriendUserWidget';
import FriendFollowingLeaderboard from './FriendFollowingLeaderboard';
import FriendChartWidget from './FriendChartWidget';
import FriendWallWidget from './FriendWallWidget'
import FriendPicGridItem from "./FriendPicGridItem";

import moment from 'moment';
import ReactFilepicker from 'react-filepicker';

import '../../scss/primary.scss';

class FriendDash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      allPics: [],
      friends: [],
      isFollowing: false
    }

  }
  handleDate(field, event) {
    this.setState({
      [field]: event
    })
  }

  handleChange(field, event) {

    this.setState({
      [field]: event.target.value
    });
  }

  handleFile(field, event) {
    console.log(event.url);
    this.setState({
       profilePicture: event.url
    });
  }

  mountStuff(){
    new Promise((resolve, reject)=> {
      getAuth(resolve, reject);
    }).then((res, err)=> {
      if (err){
        browserHistory.push('/');
      }
      else if(res.body === false){
        browserHistory.push('/');
      }
      else {
        getFriend(this.props.params.userId);

        let isFollowing = false;
        var followingArray = this.props.user.following;
        for (var i = 0; i < followingArray.length; i++) {
          if ( followingArray[i] === this.props.friend._id )  {
            this.setState({isFollowing: true});
          }
        }

        new Promise( ( resolve, reject ) => {
          getAllUsers( resolve, reject );
        } ).then( ( res, err ) => {
          if ( err ) {
            return console.error( err );
          }
          this.setState( {
            users: res.body
           } )
        } );
      }
    })

  }

  componentWillMount(){

    this.mountStuff();

  }


  componentWillReceiveProps(){

    this.mountStuff();

  }

  unfollow(){

      let newFollowingArray = this.props.user.following;
      let followIndex = newFollowingArray.indexOf(this.props.friend._id);
      newFollowingArray.splice(followIndex, 1);

      console.log(this.props.user._id);
      console.log(newFollowingArray);
      putFriend({
        _id: this.props.user._id,
        following: newFollowingArray
      }, newFollowingArray, this.props.user._id);

      this.setState({isFollowing: false});


  }

  follow(){

      let newFollowingArray = this.props.user.following;
      newFollowingArray.push(this.props.friend._id);

      putFriend({
        _id: this.props.user._id,
        following: newFollowingArray
      }, newFollowingArray, this.props.user._id);

      this.setState({isFollowing: true});

  }


  render() {



    let weightChartUrl = `/api/weightchart/${this.props.friend._id}`
    let cardioChartUrl = `/api/cardiochart/${this.props.friend._id}`
    let bodyWeightChartUrl = `/api/bodyweightchart/${this.props.friend._id}`


    const allUsers = this.state.users.map( ( friend ) => {
      return (
        <FriendFollowingLeaderboard
          key={friend._id}
          userId={friend._id}
          name={friend.firstName + ' ' + friend.lastName}
          pic={friend.profilePicture}
          users={friend}
        />
      );
    } );

    const allPics = this.props.friend.pictures.map((pic) => (
              <FriendPicGridItem key={pic} pic={pic} />
     ))

    return (

              <article>

                <header id="dashboard-header">

                  <Navigation />

                </header>

                <div className="page-title-bar">
                    <h1>{this.props.friend.firstName}s Dashboard</h1>
                </div>

                <div className="container main-content" id='dashboard'>

                  <div className="row">

                    <div className="col-md-3" id="left-dash">

                      <FriendUserWidget />

                      {this.state.isFollowing ?

                        <button onClick={this.unfollow.bind(this)} className="btn btn-success"><i className="fa fa-user-times" aria-hidden="true" ></i> Unfollow</button>

                        :

                        <button onClick={this.follow.bind(this)} className="btn btn-success"><i className="fa fa-user-plus" aria-hidden="true"></i> Follow</button>

                        }

                        <div className="panel panel-default" id="following-widget">

                            <div className="panel-heading">
                                <center><i className="fa fa-users" aria-hidden="true"></i> Following</center>
                            </div>

                            <div className="list-group">

                                {allUsers}

                            </div>

                            </div>

                            <div id="pic-widget">

                                      {allPics}

                                  </div>


                    </div>

                    <div className="col-md-9" id="content-dash">

                    <FriendChartWidget title="Weight Goals: Rep Max" chartUrl={weightChartUrl} />

                    <FriendChartWidget title="Cardio Goals: Miles/Distance" chartUrl={cardioChartUrl} />

                    <FriendChartWidget title="Body Weight" chartUrl={bodyWeightChartUrl} />

                      <FriendWallWidget />

                    </div>




                  </div>


                </div>

              <Footer />
              </article>

    );
  }
}

export default connect(state => ({user: state.user, friend: state.friend, following: state.following}))(FriendDash);
