import React from 'react';
import {Link, browserHistory} from "react-router";
import PicGridItem from "./FriendPicGridItem";
import {Modal, Button} from "react-bootstrap";

import '../../scss/primary.scss';

export default class FriendPicWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentWillReceiveProps(){

  

  }


  render() {


    return (

      <div id="pic-box">

      <div id="pic-widget">

        {allPics}

      </div>

    </div>

    );
  }
}
