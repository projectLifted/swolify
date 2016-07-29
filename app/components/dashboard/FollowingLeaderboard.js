import React from 'react';

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
            <a href="#" className="list-group-item"><div style={followingImg} className="following-pic"></div> <div className="following-name">Abraham Lincoln</div><div className="delete-follower"><button className="btn btn-danger">X</button></div></a>
            <a href="#" className="list-group-item"><div style={followingImg} className="following-pic"></div> <div className="following-name">Abraham Lincoln</div><div className="delete-follower"><button className="btn btn-danger">X</button></div></a>
            <a href="#" className="list-group-item"><div style={followingImg} className="following-pic"></div> <div className="following-name">Abraham Lincoln</div><div className="delete-follower"><button className="btn btn-danger">X</button></div></a>
            <a href="#" className="list-group-item"><div style={followingImg} className="following-pic"></div> <div className="following-name">Abraham Lincoln</div><div className="delete-follower"><button className="btn btn-danger">X</button></div></a>
          </div>
      </div>


    );
  }
}
