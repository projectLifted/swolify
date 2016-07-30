import React from 'react';
import {Link, browserHistory} from "react-router";

import '../../scss/primary.scss';

export default class FollowingLeaderboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let followingImg = {
      backgroundImage: `url("http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzODg2NTc0MDky.jpg")`
    };

    return (

      <div className="panel panel-default" id="following-widget">

          <div className="panel-heading">
              <center><i className="fa fa-users" aria-hidden="true"></i> Following</center>
          </div>

      <div className="list-group">
            <Link to="/" className="list-group-item"><div style={followingImg} className="following-pic"></div> <div className="following-name">Abraham Lincoln</div></Link>
            <Link to="/" className="list-group-item"><div style={followingImg} className="following-pic"></div> <div className="following-name">Abraham Lincoln</div></Link>
            <Link to="/" className="list-group-item"><div style={followingImg} className="following-pic"></div> <div className="following-name">Abraham Lincoln</div></Link>
            <Link to="/" className="list-group-item"><div style={followingImg} className="following-pic"></div> <div className="following-name">Abraham Lincoln</div></Link>
            <Link to="/" className="list-group-item"><div style={followingImg} className="following-pic"></div> <div className="following-name">Abraham Lincoln</div></Link>
                <Link to="/" className="list-footer"><i className="fa fa-search-plus" aria-hidden="true"></i> View All</Link>
          </div>
      </div>


    );
  }
}
