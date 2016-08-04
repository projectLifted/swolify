import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
import NewGoal from './components/newgoal/NewGoal';
import Signup from './components/Signup';
import PostWorkout from './components/postworkout/PostWorkout';
import Dashboard from './components/dashboard/Dashboard';
import Search from './components/search/Search';
import MyWorkouts from './components/myworkouts/MyWorkouts';
import EditProfile from './components/EditProfile';
import EditGoal from './components/editgoal/EditGoal';
import FriendDash from './components/frienddash/FriendDash';


import './scss/primary.scss';

document.addEventListener("DOMContentLoaded", () => {
  const reactNode = document.getElementById('react-node');

  if (reactNode) {
    ReactDOM.render (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Home} />
          <Route path="/new-goal" component={NewGoal}/>
          <Route path="/sign-up" component={Signup}/>
          <Route path="/post-workout/:workoutType/:goalId/:goalName" component={PostWorkout}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/search" component={Search}/>
          <Route path="/workouts" component={MyWorkouts}/>
          <Route path="/edit-profile" component={EditProfile}/>
          <Route path="/edit-goal/:goalId" component={EditGoal}/>
        </Router>
      </Provider>
    , reactNode);
  }
});
