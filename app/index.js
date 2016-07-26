import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Home from './components/Home';
import NewGoal from './components/NewGoal';
import Signup from './components/Signup';
import PostWorkout from './components/PostWorkout';
import Dashboard from './components/Dashboard/Dashboard';

import './scss/primary.scss';

document.addEventListener("DOMContentLoaded", () => {
  const reactNode = document.getElementById('react-node');

  if (reactNode) {
    ReactDOM.render (
        <Router history={browserHistory}>
          <Route path="/" component={Home} />
          <Route path="/new-goal" component={NewGoal}/>
          <Route path="/sign-up" component={Signup}/>
          <Route path="/post-workout" component={PostWorkout}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Router>
    , reactNode);
  }
});
