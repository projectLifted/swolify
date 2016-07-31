import React from 'react';
import {Link, browserHistory} from "react-router";

import ReactFilepicker from 'react-filepicker';
import {Modal, Button} from "react-bootstrap";

import '../../scss/primary.scss';

export default class FriendPicWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addPic: "",
      show: false
    }
  }

  handleFile(field, event) {
    console.log(event.url);
    this.setState({
       addPic: event.url
    });
  }

  render() {

    let modalImg = "http://feelgrafix.com/data/landscape/landscape-4.jpg";
    let dashImg = {
      backgroundImage: 'url("http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzODg2NTc0MDky.jpg")'
    };

    let close = () => this.setState({ show: false});


    return (

      <div id="pic-box">
      <div id="pic-widget">

        <div onClick={() => this.setState({ show: true})} style={dashImg} className="dash-img">
        </div>
        <div onClick={() => this.setState({ show: true})} style={dashImg} className="dash-img">
        </div>
        <div onClick={() => this.setState({ show: true})} style={dashImg} className="dash-img">
        </div>
        <div onClick={() => this.setState({ show: true})} style={dashImg} className="dash-img">
        </div>

        <div onClick={() => this.setState({ show: true})} style={dashImg} className="dash-img">
        </div>
        <div onClick={() => this.setState({ show: true})} style={dashImg} className="dash-img">
        </div>
        <div onClick={() => this.setState({ show: true})} style={dashImg} className="dash-img">
        </div>
        <div onClick={() => this.setState({ show: true})} style={dashImg} className="dash-img">
        </div>
        <div onClick={() => this.setState({ show: true})} style={dashImg} className="dash-img">
        </div>
        <div onClick={() => this.setState({ show: true})} style={dashImg} className="dash-img">
        </div>
        <div onClick={() => this.setState({ show: true})} style={dashImg} className="dash-img">
        </div>


        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Body>
           <img class="modal-image" src={modalImg} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
       </Modal>

      </div>

    </div>

    );
  }
}
