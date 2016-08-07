import React from 'react';
import {Accordion, ListGroup, ListGroupItem, Panel, ProgressBar} from 'react-bootstrap';
import {Link, browserHistory} from "react-router";
import { connect } from "react-redux";
import { getAllUsers, postToWall, deleteFromWall} from '../../services/userService.js';

class WallPostComponent extends React.Component {
  constructor(props) {
   super(props);
  }

  deletePost(postId) {

    deleteFromWall(this.props.user._id, postId);
  }


  render() {
    let followingImg = {
      backgroundImage: `url(${this.props.posterPic})`
    };

    return (
      <div className="list-group-item">

        <div className="wall-container">

          <div style={followingImg} className="wall-pic"><div className="test"></div></div>

            <div className="wall-content">
              <div className="wall-name"><Link to="/">{this.props.posterName}</Link>

              <button onClick={this.deletePost.bind(this, this.props.postId)} className="btn btn-danger pull-right"><i className="fa fa-trash-o" aria-hidden="true"></i></button>

              <span></span>
            
</div>

              {this.props.message}
            </div>

      </div>
    </div>
    )
  }
}

export default connect(state => ({user: state.user}))(WallPostComponent);
