import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from "react-router";

import Navigation from '../Navigation';
import Footer from '../Footer';
import GoalsWidget from '../sidebar/GoalsWidget';
import EditLiftingForm from './EditLiftingForm';
import EditCardioForm from './EditCardioForm';
import UserWidget from '../sidebar/UserWidget';
import { getAuth } from '../../services/loginService.js'

import moment from 'moment';
import DatePicker from 'react-datepicker';

import '../../scss/primary.scss';

export default class EditGoal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment(),
      radioOption: "weightLifting",
      goalName: this.props.goalName,
      user: {}
    }
  }

    // componentWillMount() {
    //   new Promise((resolve, reject)=> {
    //     getAuth(resolve, reject);
    //   }).then((res, err)=> {
    //     if (err){
    //     }
    //     else if(res.body === false){
    //       browserHistory.push('/');
    //     }
    //     else {
    //       this.setState({user: res.body})
    //     }
    //   })
    // }

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

    handleRadioChange(field, event) {
      this.setState({radioOption: field})
    }

  render() {
    return (
    <article>
      <header id="new-goal-header">

      <Navigation />

      </header>

      <div className="page-title-bar">
          <h1>Edit Goal</h1>
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

                                <EditCardioForm user={this.state.user} />

                          </div>

                  </div>

                  <div className="col-md-4" id="side-bar">

                      <UserWidget user={this.state.user} />

                      <Link to="/dashboard"><button id="view-dash-postworkout" type="button" className="btn btn-success"><i className="fa fa-tachometer" aria-hidden="true"></i> View Dashboard</button></Link>
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
