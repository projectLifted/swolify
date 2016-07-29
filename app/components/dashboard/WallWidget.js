import React from 'react';
import {Accordion, ListGroup, ListGroupItem, Panel, ProgressBar} from 'react-bootstrap';
import {Link, browserHistory} from "react-router";

import '../../scss/primary.scss';

export default class WallWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      max_chars: 160,
      chars_left: 160
    }

  }

  handleTextAreaChange(event) {
    let input = event.target.value;
      this.setState({
        chars_left: this.state.max_chars - input.length
      });
  }

  render() {

    let followingImg = {
      backgroundImage: `url("http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzODg2NTc0MDky.jpg")`
    };

    return (

    <div className="panel panel-default wall-box" id="wall">
    <div className="panel-heading"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Wall Posts</div>
    <div className="panel-body">

        <textarea maxLength="160" onChange={this.handleTextAreaChange.bind(this)} className="form-control" rows="3"></textarea>
          <p className="pull-left chars-left">{this.state.chars_left}</p>
        <button id="post-to-wall" className="btn btn-info pull-right"><i className="fa fa-pencil" aria-hidden="true"></i> Post</button>

    </div>
          <div className="list-group">
          <div className="list-group-item">
            <div className="wall-container">
                <div style={followingImg} className="wall-pic"></div>
                <div className="wall-name"><Link to="/">Abraham Lincoln</Link> <button className="btn btn-danger pull-right">X</button></div>
                <div className="wall-content">Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Pellentesque tempus auctor ex nec sodales. Duis orci risus, gravida id elit sit amet, suscipit feugiat urna.
                </div>
          </div>
        </div>

          <div className="list-group-item">
            <div className="wall-container">
                <div style={followingImg} className="wall-pic"></div>
                <div className="wall-name"><Link to="/">Abraham Lincoln</Link><button className="btn btn-danger pull-right">X</button></div>
                <div className="wall-content">Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Pellentesque
                </div>
          </div>
          </div>

          <div className="list-group-item">
            <div className="wall-container">
                <div style={followingImg} className="wall-pic"></div>
                <div className="wall-name"><Link to="/">Abraham Lincoln</Link><button className="btn btn-danger pull-right">X</button></div>
                <div className="wall-content">Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Pellentesque tempus auctor ex nec sodales. Duis orci risus, gravida id elit sit amet, suscipit feugiat urna.
                Duis orci risus, gravida id elit sit amet, suscipit feugiat urna. Pellentesque tempus auctor ex nec sodales. Duis orci risus, gravida id elit sit amet, suscipit feugiat urna.
                Duis orci risus, gravida id elit sit amet, suscipit feugiat urna.
                </div>
          </div>
          </div>

          <div className="list-group-item">
            <div className="wall-container">
              <div style={followingImg} className="wall-pic"></div>
                <div className="wall-name"><Link to="/">Abraham Lincoln</Link><button className="btn btn-danger pull-right">X</button></div>
                <div className="wall-content">Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Pellentesque tempus auctor ex nec sodales. Duis orci risus, gravida id elit sit amet, suscipit feugiat urna.
                </div>
          </div>
        </div>

          <div className="list-group-item">
            <div className="wall-container">
              <div style={followingImg} className="wall-pic"></div>
                <div className="wall-name"><Link to="/">Abraham Lincoln</Link><button className="btn btn-danger pull-right">X</button>
                </div>
                <div className="wall-content">Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Pellentesque tempus
                </div>
          </div>
          </div>

        </div>
    </div>
    );
  }
}
