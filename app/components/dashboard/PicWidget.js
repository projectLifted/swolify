import React from 'react';
import {Link, browserHistory} from "react-router";
import PicGridItem from "./PicGridItem";
import ReactFilepicker from 'react-filepicker';
import {Modal, Button} from "react-bootstrap";
import { putPhoto } from '../../services/userService.js';
import { signin, putphoto } from '../../ducks/userDuck';
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

    putPhoto({
      _id: this.props.user._id,
      pictures: newPicArray
    }, newPicArray, this.props.user._id);

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



        <ReactFilepicker options={options} buttonClass="btn btn-success btn-filepicker" apikey={'AmsUN5IluSleXZjIvVqYvz'} defaultWidget={false}  onSuccess={this.handleFile.bind(this, "file")} />



      <div id="pic-widget">

        {allPics}

      </div>

    </div>

    );
  }
}

export default connect(state => ({user: state.user}))(PicWidget);
