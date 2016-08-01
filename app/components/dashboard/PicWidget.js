import React from 'react';
import {Link, browserHistory} from "react-router";

import ReactFilepicker from 'react-filepicker';
import {Modal, Button} from "react-bootstrap";

import '../../scss/primary.scss';

export default class PicWidget extends React.Component {
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
      backgroundImage: `url("http://feelgrafix.com/data/landscape/landscape-4.jpg")`
    };

    let close = () => this.setState({ show: false});



    return (

      <div id="pic-box">


        {this.state.addPic
              ?
                <center><button type="button" className="btn btn-success"><i className="fa fa-picture-o" aria-hidden="true"></i> Save Pic</button>
                <img className="filepickerPhotoSidebar" src={this.state.addPic} /></center>

              :

                <ReactFilepicker buttonClass="btn btn-success btn-filepicker" apikey={'AgUFEbg5LQ6OC6EafL3gqz'} defaultWidget={false}  onSuccess={this.handleFile.bind(this, "file")} />

            }


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
