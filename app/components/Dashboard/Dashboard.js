import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Accordion } from 'react-bootstrap';
import { Link, browserHistory } from "react-router";
import store from '../../store';
import { signin } from '../../ducks/userDuck';
import { postGoal } from '../../ducks/goalDuck';

import { getAuth } from '../../services/loginService.js';
import { getUserGoals } from '../../services/goalService';

import Navigation from '../Navigation';
import Footer from '../Footer';
import UserWidget from '../sidebar/UserWidget';
import FollowingLeaderboard from './FollowingLeaderboard';
import WeightGoalsPanel from './WeightGoalsPanel';
import CardioGoalsPanel from './CardioGoalsPanel';
import ChartWidget from './ChartWidget';
import WallWidget from './WallWidget';
import PicWidget from './PicWidget';

import moment from 'moment';
import ReactFilepicker from 'react-filepicker';

import gym from '../../images/gym.png';
import running from '../../images/running.png';
import '../../scss/primary.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      birthdate: "",
      images: [{
          src:'http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzODg2NTc0MDky.jpg',
          title: 'This is a test',
          description: 'this is a test'
      }],
      weightLiftingGoals: [],
      cardioGoals: [],
      user: {},
      weightChartUrl: '',
      cardioChartUrl: '',
      noGoals: false
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

  componentWillMount() {
    new Promise((resolve, reject)=> {
      getAuth(resolve, reject);
    }).then((res, err)=> {
      if (err){
      }
      else if(res.body === false){
        browserHistory.push('/');
      }
      else {
        store.dispatch(signin(res.body));
        this.setState({
          weightChartUrl: `/api/weightchart/${res.body._id}`,
          cardioChartUrl: `/api/cardiochart/${res.body._id}`,
          bodyWeightChartUrl: `/api/bodyweightchart/${res.body._id}`
        });

        new Promise((resolve, reject) => {
          getUserGoals(this.props.user._id, resolve, reject);
        }).then((res, err) => {
          if (err) { return }
          else if (res.body.length === 0) {
            this.setState({
              noGoals: true
            })
            return console.log("no goals");
          }
          else {
            if (this.props.goals.goals.length === 0) {
              res.body.map(goal => {
                store.dispatch(postGoal(goal));
              })
            }

            // Seperate goals by goal type
            res.body.map(goal => {
              console.log(goal);
              if (goal.goalType === "WeightLifting") {
                this.setState((state) => ({weightLiftingGoals: state.weightLiftingGoals.concat(goal)}))
              }
              else {
                this.setState((state) => ({cardioGoals: state.cardioGoals.concat(goal)}))
              }
            });

            this.setState({liftPanels: this.state.weightLiftingGoals.map((goal) => (
              <WeightGoalsPanel
                  key={goal._id}
                  goalId={goal._id}
                  title={goal.goalName}
                  progress={goal.goalMaxProgress}
              />
          ))})
            this.setState({cardioPanels: this.state.cardioGoals.map((goal) => (
              <CardioGoalsPanel
                  key={goal._id}
                  goalId={goal._id}
                  title={goal.goalName}
                  distanceProgress={goal.distanceProgress}
                  timeProgress={goal.timeProgress}
                  avgDistance={goal.distanceAvg}
                  mileMinutes={goal.mileMinutesAvg}
                  mileSeconds={goal.milesSecondsAvg}
              />
          ))})

          }
        })
      }
    });

  }



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
                      <UserWidget user={this.props.user} />

                      <FollowingLeaderboard />

                    </div>

                    <div className="col-md-6" id="content-dash">

                    {this.state.noGoals
                      ?

                      <center><h2>You have no goals, bro. Time to set some goals.</h2>

                      <Link to="/new-goal"><button className="btn-lg btn-success" id="no-goals-btn"><i className="fa fa-plus-circle" aria-hidden="true"></i> Add a New Goal</button></Link></center>

                      :


                      <span>
                      <ChartWidget title="Weight Goals: Rep Max" chartUrl={this.state.weightChartUrl} />
                      <ChartWidget title="Cardio Goals: Miles/Distance" chartUrl={this.state.cardioChartUrl} />
                      <ChartWidget title="Body Weight" chartUrl={this.state.bodyWeightChartUrl} />
                      </span>

                      }

                      <WallWidget />

                    </div>

                    <div className="col-md-3" id="right-dash">

                    {this.state.noGoals

                      ?

                        <span></span>

                      :

                      <span>
                      <div id="goals-panel">

                      <div id="weightlifting-goals">
                      <h2><img src={gym} /> Weightlifting Goals</h2>
                          {this.state.liftPanels}
                      </div>
                      </div>

                      <div id="goals-panel">
                        <div id="cardio-goals">
                        <h2><img src={running} /> Cardio Goals</h2>
                          {this.state.cardioPanels}
                        </div>
                      </div>

                      </span>

                      }

                      <PicWidget user={this.props.user} />

                    </div>

                  </div>

                </div>

              <Footer />
              </article>

    );
  }
}

export default connect(state => ({user: state.user, goals: state.goals}))(Dashboard);
