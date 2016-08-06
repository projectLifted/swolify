import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from "react-router";
import {getAuth} from '../services/loginService.js'

import Navigation from './Navigation';
import Footer from './Footer';

// import logo from '../images/logo.png';
import '../scss/primary.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthed: Boolean
    }

  }

  componentWillMount(){
    new Promise((resolve, reject)=> {
      getAuth(resolve, reject);
    }).then((res, err)=> {
      if (err){
      }
      else if(res.body === false){
        this.setState({isAuthed: false})

      }
      else {
        this.setState({isAuthed: true})
      }
    })
  }

  render() {
    return (
      <article>
      <div className="jumbotron">
        <div className="dark-top-gradient-container">


        <div className="textLogo tinUpIn"><span className="logoIcon">5</span>Swolify</div>

        <h1>Track your gains. Compete.</h1>

      { this.state.isAuthed

        ?
          <span>
          <Link to="/Dashboard"><button className="btn btn-primary btn-lg" role="button"><i className="fa fa-tachometer" aria-hidden="true"></i>
          &nbsp;Visit Dashboard</button></Link>

          <a href="/api/auth/facebook/logout"><button className="btn btn-primary btn-lg" role="button"><i className="fa fa-sign-out" aria-hidden="true"></i> &nbsp;Logout</button></a>
          </span>

        :

          <span><a href="/api/auth/facebook"><button className="btn btn-primary btn-lg" role="button"><i className="fa fa-facebook-official" aria-hidden={true}></i>&nbsp;Login with Facebook</button></a></span>

    }

      </div>
    </div>

        <div className="container">

          <div className="row" id="promotionTable">
            <div className="col-md-4">
              <span><i className="fa fa-tachometer" aria-hidden={true}></i></span>
              <h2>Chart Your Progress</h2>
              <p>
                Detailed real-time analytics will revolutionize your workout with chart fanciness.
              </p>
            </div>

            <div className="col-md-4">
              <span><i className="fa fa-users" aria-hidden={true}></i></span>
              <h2>Follow Your Friends</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu finibus est. Aenean magna ante, convallis vitae leo rhoncus, faucibus auctor nisi.
              </p>
            </div>
            <div className="col-md-4">
              <span><i className="fa fa-flag-checkered" aria-hidden={true}></i></span>
              <h2>Reach Your Goals</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu finibus est. Aenean magna ante, convallis vitae leo rhoncus, faucibus auctor nisi.
              </p>
            </div>
            </div>
          </div>
          <Footer />

    </article>
    );
  }
}
