import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from "react-router";

import { getAuth } from '../../services/loginService.js';

import Navigation from '../Navigation';
import Footer from '../Footer';
import UserWidget from '../sidebar/UserWidget';
import FollowersLeaderboard from './FollowersLeaderboard';
import FollowingLeaderboard from './FollowingLeaderboard';
import WeightGoalsPanel from './WeightGoalsPanel';
import CardioGoalsPanel from './CardioGoalsPanel';
import ChartWidget from './ChartWidget';
import WallWidget from './WallWidget'
import PicWidget from './PicWidget'

import moment from 'moment';
import ReactFilepicker from 'react-filepicker';

import '../../scss/primary.scss';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      birthdate: ""
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

  // componentWillMount(){
  //   new Promise((resolve, reject)=> {
  //     getAuth(resolve, reject);
  //   }).then((res, err)=> {
  //     if (err){
  //     }
  //     else if(res.body === false){
  //       browserHistory.push('/');
  //     }
  //     else {
  //       this.setState({user: res.body})
  //       console.log(this.state.user);
  //     }
  //   })
  //
  // }

  render() {
    return (
              <article>
                <header id="dashboard-header">

                  <Navigation />

                </header>

                <div className="page-title-bar">
                    <h1>Dashboard</h1>
                </div>

                <div className="container main-content" id='dashboard'>

                  <div className="row">

                    <div className="col-md-3" id="left-dash">
                      <UserWidget />

                      <FollowingLeaderboard />
                      <FollowersLeaderboard />


                    </div>

                    <div className="col-md-6" id="content-dash">

                      <ChartWidget title="Weight Goals: Rep Max" key="1" />
                      <ChartWidget title="Cardio Goals: Miles/Distance" key="2" />
                      <ChartWidget title="Body Weight" />
                      <WallWidget />

                    </div>

                    <div className="col-md-3" id="right-dash">

                      <WeightGoalsPanel />
                      <CardioGoalsPanel />

                      <PicWidget />

                    </div>

                  </div>




                </div>

              <Footer />
              </article>

    );
  }
}
