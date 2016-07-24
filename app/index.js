import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Home from './components/Home';

import './scss/primary.scss';

document.addEventListener("DOMContentLoaded", () => {
  const reactNode = document.getElementById('react-node');

  if (reactNode) {
    ReactDOM.render (
        <Router history={browserHistory}>
          <Route path="/" component={Home}/>
        </Router>
    , reactNode);
  }
});
