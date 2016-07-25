import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './Navigation';
import Footer from './Footer';

import '../scss/primary.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article>
      <div className="jumbotron">
        <div className="jt-container">

          <Navigation />

        <h1>Track your gains. Compete.</h1>
        <p><a className="btn btn-primary btn-lg" href="/api/auth/facebook" role="button"><i className="fa fa-facebook-official" aria-hidden={true}></i>
      &nbsp;Get Started</a></p>
      </div>
    </div>

        <div className="container">

          <div className="row" id="promotionTable">
            <div className="col-md-4">
              <span><i className="fa fa-tachometer" aria-hidden={true}></i></span>
              <h2>Chart Your Progress</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu finibus est. Aenean magna ante, convallis vitae leo rhoncus, faucibus auctor nisi.
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
