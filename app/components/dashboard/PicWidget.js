import React from 'react';
import {Link, browserHistory} from "react-router";

import '../../scss/primary.scss';

export default class PicWidget extends React.Component {
  constructor(props) {
    super(props);


  }


  render() {

    let dashImg = {
      backgroundImage: `url("http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzODg2NTc0MDky.jpg")`
    };

    return (

      <div id="pic-box">

        <button type="button" className="btn btn-success"><i className="fa fa-picture-o" aria-hidden="true"></i> Add Pic</button>

      <div id="pic-widget">


        <div style={dashImg} className="dash-img">
        </div>
        <div style={dashImg} className="dash-img">
        </div>
        <div style={dashImg} className="dash-img">
        </div>
        <div style={dashImg} className="dash-img">
        </div>

        <div style={dashImg} className="dash-img">
        </div>
        <div style={dashImg} className="dash-img">
        </div>
        <div style={dashImg} className="dash-img">
        </div>
        <div style={dashImg} className="dash-img">
        </div>
        <div style={dashImg} className="dash-img">
        </div>
        <div style={dashImg} className="dash-img">
        </div>
        <div style={dashImg} className="dash-img">
        </div>

      </div>


    </div>

    );
  }
}
