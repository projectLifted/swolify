import React from 'react';
import '../../scss/primary.scss';
import { connect } from 'react-redux';
import {Link, browserHistory} from "react-router";
import { deleteFromWall } from '../../services/userService';

class WallPostComponent extends React.Component {
  constructor(props) {
   super(props);
  }

  deletePost(postId) {
<<<<<<< HEAD
    console.log(postId);
    console.log(this.props.user._id);
=======

>>>>>>> 39794ef3e8a7f16bb0af726f71b8c69603466f04
    deleteFromWall(this.props.user._id, postId);
  }

  render() {
    let followingImg = {
      backgroundImage: `url(${this.props.posterPic})`
    };

    return (
      <div className="list-group-item">
<<<<<<< HEAD
        <div className="wall-container">
            <div style={followingImg} className="wall-pic"></div>
            <div className="wall-name"><Link to="/">{this.props.posterName}</Link>
            <button onClick={this.deletePost.bind(this, this.props.postId)} className="btn btn-danger pull-right"><i className="fa fa-trash-o" aria-hidden="true"></i></button></div>
            <div className="wall-content">
              {this.props.message}
            </div>
=======

        <div className="wall-container">

          <div style={followingImg} className="wall-pic"><div className="test"></div></div>

            <div className="wall-content">
              <div className="wall-name"><Link to="/">{this.props.posterName}</Link>                         <button onClick={this.deletePost.bind(this, this.props.postId)} className="btn btn-danger pull-right"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
</div>

              {this.props.message}
            </div>

>>>>>>> 39794ef3e8a7f16bb0af726f71b8c69603466f04
      </div>
    </div>
    )
  }
}

export default connect(state => ({user: state.user}))(WallPostComponent)
