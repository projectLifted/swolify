import React from 'react';
import {Link, browserHistory} from "react-router";
import Navigation from '../Navigation';
import Footer from '../Footer';
import GoalsWidget from '../sidebar/GoalsWidget';
import UserWidget from '../sidebar/UserWidget';
import WeightliftingResults from './WeightliftingResults';
import CardioResults from './CardioResults';

import moment from 'moment';

import '../../scss/primary.scss';

export default class MyWorkouts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       user: {}
    }

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
                  <WeightliftingResults />
                  <WeightliftingResults />
                  <WeightliftingResults />
                  <WeightliftingResults />

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
                  <CardioResults />
                  <CardioResults />
                  <CardioResults />
                  <CardioResults />
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
