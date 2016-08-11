import React from 'react';
import {Link, browserHistory} from "react-router";
import { putPhoto, deletePhoto } from '../../services/userService.js';
import { signin } from '../../ducks/userDuck';
import { connect } from 'react-redux';
import {Modal, Button} from "react-bootstrap";

import '../../scss/primary.scss';

class PicGridItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addPic: "",
      show: false
    }
  }


    deletePhoto() {

      let newPicArray = this.props.user.pictures;

      let picIndex = newPicArray.indexOf(this.props.pic);

      newPicArray.splice(picIndex, 1);

      deletePhoto({
        _id: this.props.user._id,
        pictures: newPicArray
      }, newPicArray, this.props.user._id);

      this.setState({show:false});

  }


  render() {

    let modalImg = this.props.pic;

    let dashImg = {
      backgroundImage: `url("${this.props.pic}")`
    };

    let close = () => this.setState({ show: false});



    return (
      <span>
        <div onClick={() => this.setState({ show: true})} style={dashImg} className="dash-img">

        </div>


        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Body>
           <center><img class="modal-image" src={modalImg} /></center>
          </Modal.Body>
          <Modal.Footer>
           <Button onClick={this.deletePhoto.bind(this)} className="delete-goal-button">Delete</Button>
           <Button onClick={close}>Close</Button>
          </Modal.Footer>
       </Modal>

     </span>

    );
  }
}

export default connect(state => ({user: state.user}))(PicGridItem);
