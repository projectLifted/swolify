import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from "react-router";

import Navigation from '../Navigation';
import Footer from '../Footer';
import GoalsWidget from '../sidebar/GoalsWidget';
import EditCardioForm from './EditCardioForm';
import EditLiftingForm from './EditLiftingForm';
import DeleteGoalModal from './DeleteGoalModal';
import UserWidget from '../sidebar/UserWidget';
import { getAuth } from '../../services/loginService.js'
import { getOneGoal } from '../../services/goalService.js'
import moment from 'moment';
import DatePicker from 'react-datepicker';

import '../../scss/primary.scss';

export default class EditGoal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weightStart: true,
      user: {},
      goal: {}
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
          this.setState({user: res.body})
          this.getGoal();
        }})

      }

    getGoal(){
      new Promise((resolve, reject)=> {
        getOneGoal(this.props.params.goalId, resolve, reject);
      }).then((res, err)=>{
        if (err){
          browserHistory.push('/');
        }
        else {
          this.setState({goal: res.body});

            if (res.body.goalType === "Cardio"){
              this.setState({
                weightStart: false
              })}
              else {
              this.setState({
                weightStart: true
              })
            }
          }
      })
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

  render() {
    return (
      <article>
        <header id="new-goal-header">

        <Navigation />

        </header>

        <div className="page-title-bar">
            <h1>New Goal</h1>
            <h5>{this.state.goal.goalName}</h5>
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
                                this.state.weightStart
                                  ?
                                <EditLiftingForm
                                    goal={this.state.goal}
                                    user={this.state.user}
                                />
                                  :
                                  <EditCardioForm
                                    goal={this.state.goal}
                                    user={this.state.user}
                                  />

                              }


                            </div>

                        </div>

                    </div>

                    <div className="col-md-4" id="side-bar">

                        <UserWidget user={this.state.user} />

                          <Link to="/dashboard"><button type="button" className="btn btn-success"><i className="fa fa-tachometer" aria-hidden="true"></i> View Dashboard</button></Link>

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
