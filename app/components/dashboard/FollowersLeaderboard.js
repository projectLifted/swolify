import React from 'react';
import {Link, browserHistory} from "react-router";

import '../../scss/primary.scss';

export default class FollowersLeaderboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let followingImg = {
      backgroundImage: `url("http://cps-static.rovicorp.com/3/JPG_400/MI0003/146/MI0003146038.jpg?partner=allrovi.com")`
    };

    return (

      <div className="panel panel-default" id="followers-widget">

          <div className="panel-heading">
              <center><i className="fa fa-users" aria-hidden="true"></i> Followers</center>
          </div>

          <div className="list-group">
                <Link to="/" className="list-group-item"><div style={followingImg} className="following-pic"></div><div className="following-name">Bob Marley Lincoln</div></Link>
              <Link to="/" className="list-group-item"><div style={followingImg} className="following-pic"></div> <div className="following-name">Bob Marley Lincoln</div></Link>
            <Link to="/" className="list-group-item"><div style={followingImg} className="following-pic"></div> <div className="following-name">Bob Marley Lincoln</div></Link>
          <Link to="/" className="list-group-item"><div style={followingImg} className="following-pic"></div> <div className="following-name">Bob Marley Lincoln</div></Link>
        <Link to="/" className="list-group-item"><div style={followingImg} className="following-pic"></div> <div className="following-name">Bob Marley Lincoln</div></Link>
      <Link to="/" className="list-footer"><i className="fa fa-search-plus" aria-hidden="true"></i> View All</Link>
              </div>
          </div>


    );
  }
}
