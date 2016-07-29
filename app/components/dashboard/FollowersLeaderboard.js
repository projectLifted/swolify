import React from 'react';

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
            <a href="#" className="list-group-item"><div style={followingImg} className="followers-pic"></div> <div className="following-name">Bob Marley</div></a>
            <a href="#" className="list-group-item"><div style={followingImg} className="followers-pic"></div> <div className="following-name">Bob Marley</div></a>
            <a href="#" className="list-group-item"><div style={followingImg} className="followers-pic"></div> <div className="following-name">Bob Marley</div></a>
            <a href="#" className="list-group-item"><div style={followingImg} className="followers-pic"></div> <div className="following-name">Bob Marley</div></a>
            <a href="#" className="list-group-item"><div style={followingImg} className="followers-pic"></div> <div className="following-name">Bob Marley</div></a>
            <a href="#" className="list-footer"><i className="fa fa-search-plus" aria-hidden="true"></i> View All</a>
          </div>
      </div>


    );
  }
}
