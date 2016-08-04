import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from "react-router";

import { getAuth } from '../../services/loginService.js';

import Navigation from '../Navigation';
import Footer from '../Footer';
import FriendUserWidget from './FriendUserWidget';
import FriendFollowingLeaderboard from './FriendFollowingLeaderboard';
import FriendChartWidget from './FriendChartWidget';
import FriendWallWidget from './FriendWallWidget'
import FriendPicWidget from './FriendPicWidget'

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
      }]
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
      }
      else if(res.body === false){
        browserHistory.push('/');
      }
      else {
        this.setState({user: res.body})
        this.getUser();
      }
    })
  }

  getUser(){

  }


  render() {

    return (
              <article>
                <header id="dashboard-header">

                  <Navigation />

                </header>

                <div className="page-title-bar">
                    <h1>Paul's Dashboard</h1>
                </div>

                <div className="container main-content" id='dashboard'>

                  <div className="row">

                    <div className="col-md-3" id="left-dash">
                      <FriendUserWidget />

                      <FriendFollowingLeaderboard />

                    </div>

                    <div className="col-md-6" id="content-dash">

                      <FriendChartWidget title="Weight Goals: Rep Max" key="1" />
                      <FriendChartWidget title="Cardio Goals: Miles/Distance" key="2" />
                      <FriendChartWidget title="Body Weight" />
                      <FriendWallWidget />

                    </div>

                    <div className="col-md-3" id="right-dash">

                      <FriendPicWidget />

                    </div>

                  </div>




                </div>

              <Footer />
              </article>

    );
  }
}
