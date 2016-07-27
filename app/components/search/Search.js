import React from 'react';

import Navigation from '../Navigation';
import Footer from '../Footer';
import GoalsWidget from '../sidebar/GoalsWidget';
import UserWidget from '../sidebar/UserWidget';
import SearchResult from './SearchResult';

import '../../scss/primary.scss'

export default class Search extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <article id="searchPage">
        <header id="new-goal-header">

      <Navigation />

      </header>

      <div className="page-title-bar">
          <h1>Search Users</h1>
      </div>

      <div className="container main-content">

        <div className="container">

          <div class="row">

            <div className="col-md-8">

              <div className="row">
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                  />

                <center><button className="btn btn-primary form-submit"><i className="fa fa-search" aria-hidden="true" onClick={this.createGoal}></i> Search</button></center>

                <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <SearchResult/>
                  </div>
                <div className="col-md-2"></div>

                </div>
              </div>

            </div>

            <div className="col-md-4" id="side-bar">

                <UserWidget />

                  <button type="button" className="btn btn-success"><i className="fa fa-tachometer" aria-hidden="true"></i> View Dashboard</button>
                <GoalsWidget />

              </div>


          </div>

        </div>
      </div>

      <Footer/>
      </article>
    )
  }

}
