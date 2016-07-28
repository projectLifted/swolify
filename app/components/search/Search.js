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
      <article>
        <header id="new-goal-header">

        <Navigation />

        </header>

        <div className="page-title-bar">
            <h1>Search Users</h1>
        </div>

        <div className="container main-content">

              <div className="row">





                <div className="col-md-8 extra-top" id="search-widget">
                  <form className="form-inline" >

                        <input type="text" className="form-control search-input" id="user-search" placeholder="Search for user" />

                  </form>


                  <div className="list-group">
                      <SearchResult />

                      <SearchResult />

                      <SearchResult />

                      <SearchResult />
                  </div>

                </div>

                    <div className="col-md-4" id="side-bar">

                        <UserWidget />

                        <button type="button" className="btn btn-success"><i className="fa fa-tachometer" aria-hidden="true"></i> View Dashboard</button>
                        <GoalsWidget />

                    </div>

              </div>

        </div>

      <Footer />
      </article>

    )
  }

}
