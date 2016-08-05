import React from 'react';
import {Link, browserHistory} from 'react-router';
import { connect } from 'react-redux';
import Navigation from '../Navigation';
import Footer from '../Footer';
import GoalsWidget from '../sidebar/GoalsWidget';
import UserWidget from '../sidebar/UserWidget';
import { getAuth } from '../../services/loginService.js';

import moment from 'moment';
import DatePicker from 'react-datepicker';

import WeightWorkoutForm from './WeightWorkoutForm';
import CardioWorkoutForm from './CardioWorkoutForm';

import '../../scss/primary.scss';

class PostWorkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment(),
      user: {}
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

    componentWillMount() {

      if (!this.props.user.loggedIn) {
        browserHistory.push('/');
      }
    }

  render() {
    return (
    <article>
      <header id="post-workout-header">

      <Navigation />

      </header>

      <div className="page-title-bar">
          <h1>Post Workout</h1>
          <h5>{this.props.params.goalName}</h5>
      </div>

      <div className="container main-content">
          <div className="container">
              <div className="row">
                  <div className="col-md-8">


                    <div className="row">
                      <div className="col-md-10 extra-height">

                      </div>
                    </div>

                    <div className="row">

                    <div>

                        {
                          this.props.params.workoutType === "cardio" ?
                          <CardioWorkoutForm
                              goalId={this.props.params.goalId}
                              goalName={this.props.params.goalName}
                          />
                          :
                          <WeightWorkoutForm
                              goalId={this.props.params.goalId}
                              goalName={this.props.params.goalName}
                          />
                        }

                      </div>
                    </div>

                  </div>
                  <div className="col-md-4" id="side-bar">

                      <UserWidget user={this.props.user} />
                      <Link to="/dashboard"><button id="view-dash-postworkout" type="button" className="btn btn-success"><i className="fa fa-tachometer" aria-hidden="true"></i> View Dashboard</button></Link>

                      <Link to="/new-goal"><button type="button" className="btn btn-info"><i className="fa fa-plus-circle" aria-hidden="true" id="post-goal"></i> New Goal</button></Link>

                      <GoalsWidget user={this.props.user} />
                  </div>
              </div>
          </div>
      </div>
    <Footer />
    </article>


    );
  }
}

export default connect(state => ({user: state.user, goals: state.goals}))(PostWorkout);
