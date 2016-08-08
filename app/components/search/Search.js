import React from 'react';
import { connect } from 'react-redux';
import {Link, browserHistory} from 'react-router';
import _ from 'lodash';
import Navigation from '../Navigation';
import Footer from '../Footer';
import GoalsWidget from '../sidebar/GoalsWidget';
import UserWidget from '../sidebar/UserWidget';
import SearchResult from './SearchResult';
import { getAuth } from '../../services/loginService.js';
import { getAllUsers } from '../../services/userService';

import '../../scss/primary.scss'

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      users: [],
      term: ''
    }

  }

  componentDidMount() {
    new Promise( ( resolve, reject ) => {
			getAllUsers( resolve, reject );
		} ).then( ( res, err ) => {
			if ( err ) {
				return console.error( err );
			}
			this.setState( {
        users: res.body,
       } )

		} );
  }


  onInputChange(term) {
    this.setState({
      term
    });
  }


  render() {
    let filteredUsers = this.state.users.filter(
      (user) => {
        let name = user.firstName + ' ' + user.lastName;
        return name.toLowerCase().indexOf( this.state.term.toLowerCase() ) !== -1;
      }
    );

    const allUsers = filteredUsers.map( ( user ) => {
      if(user._id !== this.props.user._id){
      return (
        <SearchResult
          key={user._id}
          id={user._id}
          name={user.firstName + ' ' + user.lastName}
          pic={user.profilePicture}
          age={user.birthDate}
          weight={user.startWeight}
          heightFeet={user.heightFeet}
          heightInches={user.heightInches}
          location={user.location}
          users={user}
        />
      );
      }

    } );

    const userSearch = _.debounce((term) => { this.userSearch(term); }, 500);

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

                        <input
                          type="text"
                          placeholder="Search for user"
                          value={this.state.term}
                          onChange={event => this.onInputChange(event.target.value)}
                          id="user-search"
                          className="form-control search-input"
                        />

                  </form>


                  <div className="list-group">

                  {allUsers}

                  </div>

                </div>

                    <div className="col-md-4" id="side-bar">

                        <UserWidget />

                          <Link to="/dashboard"><button id="view-dash-postworkout" type="button" className="btn btn-success"><i className="fa fa-tachometer" aria-hidden="true"></i> View Dashboard</button></Link>

                          <Link to="/new-goal"><button type="button" className="btn btn-info"><i className="fa fa-plus-circle" aria-hidden="true" id="post-goal"></i> New Goal</button></Link>

                    </div>

              </div>

        </div>

      <Footer />
      </article>

    )
  }

}

export default connect(state => ({user: state.user}))(Search);
