import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Accordion } from 'react-bootstrap';
import { Link, browserHistory } from "react-router";
import store from '../../store';
import { signin } from '../../ducks/userDuck';
import { postGoal } from '../../ducks/goalDuck';
import { postWorkout } from '../../ducks/workoutDuck';

import { getAuth } from '../../services/loginService.js';
import { getUserGoals } from '../../services/goalService';
import { getAllUsers, getFollowing } from '../../services/userService';

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
      users: [],
      weightChartUrl: '',
      cardioChartUrl: '',
      noGoals: false,
      weightGoalsPresent: false,
      cardioGoalsPresent: false,
      allUsers: []
    }

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
          }
          else {
            if (this.props.goals.goals.length === 0) {
              res.body.map(goal => {
                store.dispatch(postGoal(goal));

                goal.workouts.forEach((workout)=>{
                  workout.goalName = goal.goalName;
                  workout.goalId = goal._id;
                  workout.goalType = goal.goalType;
                  workout.workoutDate = moment(workout.workoutDate).format('L');
                  store.dispatch(postWorkout(workout));
                })

              })

            }
            // Seperate goals by goal type
            res.body.map(goal => {
              if (goal.goalType === "WeightLifting") {
                this.setState({weightGoalsPresent: true})
                this.setState((state) => ({weightLiftingGoals: state.weightLiftingGoals.concat(goal)}))
              }
              else if (goal.goalType === "Cardio") {
                this.setState({cardioGoalsPresent: true})
                this.setState((state) => ({cardioGoals: state.cardioGoals.concat(goal)}))
              }
            });

            this.setState({liftPanels: this.state.weightLiftingGoals.map((goal) => (
              <WeightGoalsPanel
                  key={goal._id}
                  goalId={goal._id}
                  title={goal.goalName}
                  progress={goal.goalMaxProgress}
                  maxRepGoal={goal.goalMax}
                  goalType={goal.goalType}
              />
          ))})
            this.setState({cardioPanels:
             this.state.cardioGoals.map((goal) => (
              <CardioGoalsPanel
                  key={goal._id}
                  goalId={goal._id}
                  title={goal.goalName}
                  distanceProgress={goal.goalDistanceProgress}
                  timeProgress={goal.goalTimeProgress}
                  avgDistance={goal.avgDistance}
                  mileMinutes={goal.avgMileTime}
                  distanceGoal={goal.goalDistance}
                  mileTimeGoal={goal.goalMileTime}
                  goalType={goal.goalType}
              />
          ))})

          }
        })
      }
      if (this.props.following.following.length === 0) {
         for (let i = 0; i < this.props.user.following.length; i++) {
           new Promise((reject) => {
             getFollowing(this.props.user.following[i], reject);
           }).then((res, err) => {
             if (err) {
               return
             }
           });
         }
       }

    });

  }



  render() {

    console.log(this.props.user)

    let allFollowing = this.props.following.following.map((follow) => (
       <FollowingLeaderboard
           key={follow._id}
           followId={follow._id}
           firstName={follow.firstName}
           lastName={follow.lastName}
           profilePicture={follow.profilePicture}
       />
     ))

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


                      <div className="panel panel-default" id="following-widget">

                          <div className="panel-heading">
                              <center><i className="fa fa-users" aria-hidden="true"></i> Following</center>
                          </div>

                          <div className="list-group">

                              {allFollowing}

                              <div className="list-footer">
                                <Link to="/search"><i className="fa fa-search" aria-hidden="true"></i> Find and Remove Followers</Link>
                              </div>

                          </div>
                      </div>



                    </div>

                    <div className="col-md-6" id="content-dash">

                    {this.state.noGoals
                      ?

                      <span>
                      <center><h2>You have no goals, bro. Time to set some goals.</h2>

                      <Link to="/new-goal"><button className="btn-lg btn-success" id="no-goals-btn"><i className="fa fa-plus-circle" aria-hidden="true"></i> Add a New Goal</button></Link></center>
                      </span>

                      :

                    <span></span>

                      }

                      {this.state.weightGoalsPresent ?

                      <span>
                      <ChartWidget title="Weight Goals: Rep Max" chartUrl={this.state.weightChartUrl} />

                      </span>

                      :

                      <span></span>


                      }

                     {this.state.cardioGoalsPresent ?

                      <ChartWidget title="Cardio Goals: Miles/Distance" chartUrl={this.state.cardioChartUrl} />


                     :
                     <span> </span>
                      }

                      {this.state.noGoals
                        ?

                        <span></span>


                        :

                        <ChartWidget title="Body Weight" chartUrl={this.state.bodyWeightChartUrl} />

                      }

                      <WallWidget

                      />

                    </div>

                    <div className="col-md-3" id="right-dash">



                      <span>

                    {this.state.weightGoalsPresent ?

                      <div id="goals-panel">


                      <div id="weightlifting-goals">
                      <h2><img src={gym} /> Weightlifting Goals</h2>
                          {this.state.liftPanels}
                      </div>
                      </div>

                        :

                        <span></span>

                        }

                        {this.state.cardioGoalsPresent ?


                      <div id="goals-panel">

                        <div id="cardio-goals">


                        <h2><img src={running} /> Cardio Goals</h2>
                          {this.state.cardioPanels}
                        </div>

                      </div>

                        :

                       <span></span>

                       }

                      </span>

                      <PicWidget />

                    </div>

                  </div>

                </div>

              <Footer />
              </article>

    );
  }
}

export default connect(state => ({user: state.user, goals: state.goals, workouts: state.workouts, following: state.following}))(Dashboard);
