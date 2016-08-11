import React from 'react';
import {Accordion, ListGroup, ListGroupItem, Panel, ProgressBar} from 'react-bootstrap';
import {Link, browserHistory} from "react-router";
import { connect } from "react-redux";
import { getAllUsers, postToWall, deleteWallPost} from '../../services/userService.js';


import '../../scss/primary.scss';

class WallPoster extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      max_chars: 160,
      chars_left: 160,
      messageContent: "",
      posts: []
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
    this.setState({messageContent: ""})
  }

  render() {


    return (

    <div className="panel-body">

        <textarea maxLength="160" id="postContent" value={this.state.messageContent} onChange={this.handleTextAreaChange.bind(this)} className="form-control" rows="3"></textarea>
          <p className="pull-left chars-left">{this.state.chars_left}</p>
        <button id="post-to-wall" onClick={this.submitPost.bind(this, this.state.messageContent)} className="btn btn-info pull-right"><i className="fa fa-pencil" aria-hidden="true"></i> Post</button>

    </div>

    );
  }
}

export default connect(state => ({user: state.user}))(WallPoster)
