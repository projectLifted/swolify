import React from 'react';
import {Accordion, ListGroup, ListGroupItem, Panel, ProgressBar} from 'react-bootstrap';
import {Link, browserHistory} from "react-router";
import { connect } from "react-redux";
import { getAllUsers, postToWall, deleteWallPost} from '../../services/userService.js';

import '../../scss/primary.scss';
import WallPostComponent from './WallPostComponent';
import WallPoster from './WallPoster';


class WallWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      max_chars: 160,
      chars_left: 160,
      messageContent: "",
    }

  }


  render() {

    const posts = this.props.user.wallPosts.reverse().map((post) => (
      <WallPostComponent
          key={post._id}
          postId={post._id}
          posterId={post.sender}
          posterName={post.posterName}
          posterPic={post.posterPic}
          message={post.message}
          sender={post.sender}
      />
    ))

    return (

    <div className="panel panel-default wall-box" id="wall">
    <div className="panel-heading"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Wall Posts</div>
    <div className="panel-body">

      <WallPoster />

    </div>
          <div className="list-group">

          {posts}

        </div>
    </div>
    );
  }
}

export default connect(state => ({user: state.user}))(WallWidget)
