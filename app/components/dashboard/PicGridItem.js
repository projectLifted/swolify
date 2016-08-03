import React from 'react';
import {Link, browserHistory} from "react-router";
import { putUser } from '../../services/userService.js';
import { signin } from '../../ducks/userDuck';
import { connect } from 'react-redux';
import {Modal, Button} from "react-bootstrap";

import '../../scss/primary.scss';

export default class PicGridItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addPic: "",
      show: false
    }
  }


    deletePhoto(field, event) {
    this.setState({
       addPic: event.url,
       show: false
    });

    let newPicArray = this.props.user.pictures;

    console.log(this.props.user.pictures);
    console.log(this.props.pic);

    let picIndex = newPicArray.indexOf(this.props.pic);

    console.log(picIndex);

    newPicArray.splice(picIndex, 1);

    new Promise((resolve, reject) => {
      putUser({
        _id: this.props.user._id,
        facebookId: this.props.user.facebookId,
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        location: this.props.user.location,
        birthDate: this.props.user.birthDate,
        gender: this.props.user.gender,
        bodyType: this.props.user.bodyType,
        heightFeet: this.props.user.heightFeet,
        heightInches: this.props.user.heightInches,
        startWeight: this.props.user.startWeight,
        goalWeight: this.props.user.goalWeight,
        profilePicture: this.props.user.profilePicture,
        pictures: newPicArray
      }, this.props.user._id, resolve, reject);
    }).then((res, err) => {
      if (err) {
        return console.error(err);
      }
    })
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
           <img class="modal-image" src={modalImg} />
          </Modal.Body>
          <Modal.Footer>
           <Button onClick={this.deletePhoto.bind(this, "file")} className="delete-goal-button">Delete</Button>
           <Button onClick={close}>Close</Button>
          </Modal.Footer>
       </Modal>

     </span>

    );
  }
}

export default connect(state => ({user: state.user}))(PicGridItem);
