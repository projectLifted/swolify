import React from 'react';
import {Accordion, ListGroup, ListGroupItem, Panel, ProgressBar} from 'react-bootstrap';
import {Link, browserHistory} from "react-router";
import { connect } from "react-redux";
import { postToWall } from "../../services/userService";

import '../../scss/primary.scss';
import WallPostComponent from './WallPostComponent';

class WallWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      max_chars: 160,
      chars_left: 160,
      messageContent: ""
    }

  }

  handleTextAreaChange(event) {
    let input = event.target.value;
      this.setState({
        chars_left: this.state.max_chars - input.length,
        messageContent: input
      });
  }


  submitPost(content) {
    postToWall({message: content, sender: this.props.user._id, posterPic: this.props.user.profilePicture, posterName: `${this.props.user.firstName} ${this.props.user.lastName}`}, this.props.user._id);
  }

  render() {

    const posts = this.props.user.wallPosts.reverse().map((post) => (
      <WallPostComponent
          key={post._id}
          postId={post._id}
          posterName={post.posterName}
          posterPic={post.posterPic}
          message={post.message}
      />
    ))


    return (

    <div className="panel panel-default wall-box" id="wall">
    <div className="panel-heading"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Wall Posts</div>
    <div className="panel-body">

        <textarea maxLength="160" id="postContent" value={this.state.messageContent} onChange={this.handleTextAreaChange.bind(this)} className="form-control" rows="3"></textarea>
          <p className="pull-left chars-left">{this.state.chars_left}</p>
        <button id="post-to-wall" onClick={this.submitPost.bind(this, this.state.messageContent)} className="btn btn-info pull-right"><i className="fa fa-pencil" aria-hidden="true"></i> Post</button>

    </div>
          <div className="list-group">


            {posts}


        </div>
    </div>
    );
  }
}

export default connect(state => ({user: state.user}))(WallWidget);
