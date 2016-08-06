import React from 'react';
import {Link, browserHistory} from "react-router";
import { connect } from 'react-redux';
import store from '../../store';

import Navigation from '../Navigation';
import Footer from '../Footer';
import GoalsWidget from '../sidebar/GoalsWidget';
import UserWidget from '../sidebar/UserWidget';
import WeightliftingResults from './WeightliftingResults';
import CardioResults from './CardioResults';
import WeightGoalsPanel from '../Dashboard/WeightGoalsPanel';
import CardioGoalsPanel from '../Dashboard/CardioGoalsPanel';

import { getAuth } from '../../services/loginService.js';
import { getUserGoals } from '../../services/goalService';
import { postGoal } from '../../ducks/goalDuck';

import gym from '../../images/gym.png';
import running from '../../images/running.png';
import moment from 'moment';

import '../../scss/primary.scss';

export default class MyWorkouts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user : {},
      weightResults: [],
      cardioResults: [],
    }
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
      } else {
        this.setState({
          user : res.body
        })
        this.getGoals()
      }
    })
  }


  getGoals() {
    new Promise((resolve, reject) => {
      getUserGoals(this.state.user._id, resolve, reject);
    }).then((res, err) => {
      if (err) { return }
      else if (res.body.length === 0) {
        this.setState({
          noGoals: true
        })
        return console.log("no goals");
      }
      else {
        if (this.state.user.goals.length === 0) {
          res.body.map(goal => {
            store.dispatch(postGoal(goal));
          })
        }

        // Seperate goals by goal type
        res.body.map(goal => {
          if (goal.goalType === "WeightLifting") {
            this.setState( (state) => ({weightResults: state.weightResults.concat(goal.workouts)}) )
          }
          else {
            this.setState( (state) => ({cardioResults: state.cardioResults.concat(goal.workouts)}) )
          }
        });


      this.setState({liftPanels: this.state.weightResults.map((workout) => (
        <WeightliftingResults
            key={workout._id}
            date={workout.workoutDate}
            max={workout.workoutMax}
            weight={workout.currentWeight}
        />
    ))})
        this.setState({cardioPanels: this.state.cardioResults.map((workout) => (
          <CardioResults
              key={workout._id}
              date={workout.workoutDate}
              distance={workout.workoutDistance}
              time={workout.workoutMileTime}
              weight={workout.currentWeight}
          />
      ))})
      }
    })
  }


  deleteWorkout(field, event) {
    console.log('su[p]');

    let workoutArray = this.state.user.workouts;
    let workoutIndex = newFollowingArray.indexOf(this.props.id);

    workoutArray.splice(workoutIndex, 1);

    new Promise((resolve, reject) => {
      putUser({
        _id: this.props.user._id,
        facebookId: this.state.user.facebookId,
        firstName: this.state.user.firstName,
        lastName: this.state.user.lastName,
        location: this.state.user.location,
        birthDate: this.state.user.birthDate,
        gender: this.state.user.gender,
        bodyType: this.state.user.bodyType,
        heightFeet: this.state.user.heightFeet,
        heightInches: this.state.user.heightInches,
        startWeight: this.state.user.startWeight,
        goalWeight: this.state.user.goalWeight,
        profilePicture: this.state.user.profilePicture,
        workouts: workoutArray,
        pictures: this.state.user.pictures
      }, this.state.user._id, resolve, reject);
    }).then((res, err) => {
      if (err) {
        return console.error(err);
      }
    })

  }


  render() {

    return (
      <article>
        <header id="new-goal-header">

        <Navigation />

        </header>

          <div className="page-title-bar">
              <h1>My Workouts</h1>
          </div>

          <div className="container main-content">

              <div className="row">


                <div className="col-md-8 extra-top" id="my-workouts">


                <h2>Weight Lifting Workouts</h2>



              <table className="table">
                <thead>
                  <tr>
                    <th>Workout Date</th>
                    <th>Goal</th>
                    <th>Max Rep</th>
                    <th>Body Weight</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.liftPanels}
                </tbody>
              </table>


              <h2>Cardio Workouts</h2>

              <table className="table">
                <thead>
                  <tr>
                    <th>Workout Date</th>
                    <th>Goal</th>
                    <th>Miles</th>
                    <th>MileTime</th>
                    <th>Body Weight</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.cardioPanels}
                </tbody>
              </table>


              </div>

                    <div className="col-md-4" id="side-bar">

                        <UserWidget user={this.state.user} />

                        <Link to="/dashboard"><button id="view-dash-postworkout" type="button" className="btn btn-success"><i className="fa fa-tachometer" aria-hidden="true"></i> View Dashboard</button></Link>

                        <Link to="/new-goal"><button type="button" className="btn btn-info"><i className="fa fa-plus-circle" aria-hidden="true" id="post-goal"></i> New Goal</button></Link>

                        <GoalsWidget />

                    </div>

              </div>

        </div>

      <Footer />
      </article>

    )
  }

}
