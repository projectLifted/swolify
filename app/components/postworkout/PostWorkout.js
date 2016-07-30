import React from 'react';
import { browserHistory } from 'react-router';
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

export default class PostWorkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment()
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
      new Promise((resolve, reject)=> {
        getAuth(resolve, reject);
      }).then((res, err)=> {
        if (err){
        }
        else if(res.body === false){
          browserHistory.push('/');
        }
        else {
          this.setState({user: res.body})
        }
      })
    }

  render() {
    return (
    <article>
      <header id="post-workout-header">

      <Navigation />

      </header>

      <div className="page-title-bar">
          <h1>Post Workout</h1>
      </div>

      <div className="container main-content">
          <div className="container">
              <div className="row">
                  <div className="col-md-8">


                    <div className="row">
                      <div className="col-md-10 extra-height">

                      {/*<label className="block-label">Select your goal type:</label>
                      <label className="radio">
                        <input type="radio" name="goalOptions" id="weightGoal" value="weightlifting" /> Weightlifting Goal
                      </label>
                      <label className="radio">
                        <input type="radio" name="goalOptions" id="cardioGoal" value="cardio" /> Cardio Goal
                      </label>
                      <label className="radio">
                        <input type="radio" name="goalOptions" id="healthGoal" value="personalhealth" /> Personal Health Goal
                      </label>*/}
                      </div>
                    </div>

                    <div className="row">

                      <WeightWorkoutForm/>

                    </div>

                  </div>
                  <div className="col-md-4" id="side-bar">

                      <UserWidget />
                      <button id="view-dash-postworkout" type="button" className="btn btn-success"><i className="fa fa-tachometer" aria-hidden="true"></i> View Dashboard</button>
                      <button type="button" className="btn btn-info"><i className="fa fa-plus-circle" aria-hidden="true" id="post-goal"></i> Post Goal</button>
                      <GoalsWidget />
                  </div>
              </div>
          </div>
      </div>
    <Footer />
    </article>


    );
  }
}
