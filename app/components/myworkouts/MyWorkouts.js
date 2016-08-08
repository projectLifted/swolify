import React from 'react';
import {Link, browserHistory} from "react-router";
import { connect } from 'react-redux';

import Navigation from '../Navigation';
import Footer from '../Footer';
import GoalsWidget from '../sidebar/GoalsWidget';
import UserWidget from '../sidebar/UserWidget';
import WeightliftingResults from './WeightliftingResults';
import CardioResults from './CardioResults';
import WeightGoalsPanel from '../Dashboard/WeightGoalsPanel';
import CardioGoalsPanel from '../Dashboard/CardioGoalsPanel';
import store from '../../store';

import { postWorkout } from '../../ducks/workoutDuck';

import { getAuth } from '../../services/loginService.js';
import { getUserGoals } from '../../services/goalService';
import { postGoal } from '../../ducks/goalDuck';

import gym from '../../images/gym.png';
import running from '../../images/running.png';
import moment from 'moment';

import '../../scss/primary.scss';

class MyWorkouts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goals: []
    }

  }

  render() {

    let allWorkouts = this.props.workouts.workouts;
    let weightGoalsMap = [];
    let cardioGoalsMap = [];
    let weightWorkouts = [];
    let cardioWorkouts = [];


    allWorkouts.forEach((workout) => {
      if (workout.goalType === "WeightLifting") {
        weightWorkouts.push(workout);

      }
      else {
        cardioWorkouts.push(workout);
      }

    });

      cardioWorkouts.sort((a, b)=> {
          if (a.workoutDate > b.workoutDate) {
            return 1;
          }
          if (a.workoutDate < b.workoutDate) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });


        weightWorkouts.sort((a, b)=> {
            if (a.workoutDate > b.workoutDate) {
              return 1;
            }
            if (a.workoutDate < b.workoutDate) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });


      const liftPanels = weightWorkouts.map((workout)=>(
        <WeightliftingResults
            key={workout._id}
            workoutId={workout._id}
            goalId={workout.goalId}
            date={workout.workoutDate}
            max={workout.workoutMax}
            weight={workout.currentWeight}
            goalName={workout.goalName}
        />

        )
      )


      const cardioPanels = cardioWorkouts.map((workout)=>(
        <CardioResults
            key={workout._id}
            workoutId={workout._id}
            goalId={workout.goalId}
            date={workout.workoutDate}
            distance={workout.workoutDistance}
            time={workout.workoutMileTime}
            weight={workout.currentWeight}
            goalName={workout.goalName}
        />

      )
      )

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
                  {liftPanels}
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
                  {cardioPanels}
                </tbody>
              </table>


              </div>

                    <div className="col-md-4" id="side-bar">

                        <UserWidget />

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

export default connect(state => ({user: state.user, goals: state.goals, workouts: state.workouts}))(MyWorkouts);
