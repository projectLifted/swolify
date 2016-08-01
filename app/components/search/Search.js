import React from 'react';
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

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      users: [],
      term: ''
    }

  }

  componentWillMount(){
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
        console.log(this.state.user);
      }
    })


    new Promise( ( resolve, reject ) => {
			getAllUsers( resolve, reject );
		} ).then( ( res, err ) => {
			if ( err ) {
				return console.error( err );
			}
			this.setState( {
        users: res.body,
       } )
      //  console.log(this.state.users);
		} );

  }


  onInputChange(term) {
    this.setState({
      term,
    });
    this.props.onSearchTermChange(term);
    console.log(term)
  }


  render() {

    const allUsers = this.state.users.map( ( user ) => {
      return (
        <SearchResult
          key={user._id}
          name={user.firstName + ' ' + user.lastName}
          pic={user.profilePicture}
          age={user.birthDate}
          weight={user.startWeight}
          heightFeet={user.heightFeet}
          heightInches={user.heightInches}
          location={user.location}
        />
      );
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
