import React from 'react';
import {Link, browserHistory} from "react-router";
import PicGridItem from "./PicGridItem";
import ReactFilepicker from 'react-filepicker';
import {Modal, Button} from "react-bootstrap";
import { putUser } from '../../services/userService.js';
import { signin } from '../../ducks/userDuck';
import { connect } from 'react-redux';
import store from '../../store';

import '../../scss/primary.scss';

class PicWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addPic: "",
      show: false
    }
  }

  handleFile(field, event) {
    this.setState({
       addPic: event.url
    });

    let newPicArray = this.props.user.pictures;
    newPicArray.push(this.state.addPic);

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

    const allPics = this.props.user.pictures.map((pic) => (
        <PicGridItem key={pic} pic={pic} />
    ))

    const options = {
      buttonText: 'Add Photo',
    };

    return (

      <div id="pic-box">



        <ReactFilepicker options={options} buttonClass="btn btn-success btn-filepicker" apikey={'Agks1hdLoTWKr1uAnYtC3z'} defaultWidget={false}  onSuccess={this.handleFile.bind(this, "file")} />



      <div id="pic-widget">

        {allPics}

      </div>

    </div>

    );
  }
}

export default connect(state => ({user: state.user}))(PicWidget);
