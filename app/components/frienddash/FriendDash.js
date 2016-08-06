import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from "react-router";

import { getAuth } from '../../services/loginService.js';
import { getUser, getAllUsers } from '../../services/userService.js';

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

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      birthdate: "",
      images: [{
          src:'http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzODg2NTc0MDky.jpg',
          title: 'This is a test',
          description: 'this is a test'
      }],
      user: {},
      users: [],
      allPics: []
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

  componentWillMount(){
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
        this.getUser();
      }
    })
  }

  componentWillReceiveProps(){
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
        this.getUser();
      }
    })
  }

  getUser(){
    new Promise((resolve, reject)=> {
      getUser(this.props.params.userId, resolve, reject);
    }).then((res, err)=>{
      if(err){
        browserHistory.push('/');
      }
      else {
        this.setState({
          user: res.body,
          weightChartUrl: `/api/weightchart/${res.body._id}`,
          cardioChartUrl: `/api/cardiochart/${res.body._id}`,
          bodyWeightChartUrl: `/api/bodyweightchart/${res.body._id}`
        })


        const AllPics = this.state.user.pictures.map((pic) => (
                  <FriendPicGridItem key={pic} pic={pic} />
         ))

         this.setState({allPics: AllPics });

        this.getAllUsers()
      }
    })

  }

  getAllUsers(){
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


  render() {

    const allUsers = this.state.users.map( ( user ) => {
      return (
        <FriendFollowingLeaderboard
          key={user._id}
          userId={user._id}
          name={user.firstName + ' ' + user.lastName}
          pic={user.profilePicture}
          users={user}
          friendUser={this.state.user}
        />
      );
    } );

    return (

              <article>
                <header id="dashboard-header">

                  <Navigation />

                </header>

                <div className="page-title-bar">
                    <h1>{this.state.user.firstName}'s Dashboard</h1>
                </div>

                <div className="container main-content" id='dashboard'>

                  <div className="row">

                    <div className="col-md-3" id="left-dash">

                      <FriendUserWidget user={this.state.user} />

                        <div className="panel panel-default" id="following-widget">

                            <div className="panel-heading">
                                <center><i className="fa fa-users" aria-hidden="true"></i> Following</center>
                            </div>

                            <div className="list-group">

                                {allUsers}

                            </div>



                            </div>

                    </div>

                    <div className="col-md-6" id="content-dash">

                    <FriendChartWidget title="Weight Goals: Rep Max" chartUrl={this.state.weightChartUrl} />

                    <FriendChartWidget title="Cardio Goals: Miles/Distance" chartUrl={this.state.cardioChartUrl} />

                    <FriendChartWidget title="Body Weight" chartUrl={this.state.bodyWeightChartUrl} />

                      <FriendWallWidget />

                    </div>

                    <div className="col-md-3" id="right-dash">

                      <div id="pic-box">

                      <div id="pic-widget">
                      {this.state.allPics}

                    </div>
                  </div>


                    </div>

                  </div>




                </div>

              <Footer />
              </article>

    );
  }
}
