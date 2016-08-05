import React from 'react';
import '../../scss/primary.scss';
import {Link, browserHistory} from "react-router";

export default class WallPostComponent extends React.Component {
  constructor(props) {
   super(props);
  }

  deletePost(postId) {
    console.log(postId);
  }

  render() {
    let followingImg = {
      backgroundImage: `url(${this.props.posterPic})`
    };

    return (
      <div className="list-group-item">
        <div className="wall-container">
            <div style={followingImg} className="wall-pic"></div>
            <div className="wall-name"><Link to="/">{this.props.posterName}</Link>
            <button onClick={this.deletePost.bind(this, this.props.postId)} className="btn btn-danger pull-right"><i className="fa fa-trash-o" aria-hidden="true"></i></button></div>
            <div className="wall-content">
              {this.props.message}
            </div>
      </div>
    </div>
    )
  }
}
