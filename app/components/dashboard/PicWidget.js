import React from 'react';
import {Link, browserHistory} from "react-router";

import ReactFilepicker from 'react-filepicker';

import '../../scss/primary.scss';

export default class PicWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addPic: ""
    }


  }

  handleFile(field, event) {
    console.log(event.url);
    this.setState({
       addPic: event.url
    });
  }



  render() {


    let dashImg = {
      backgroundImage: `url("http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzODg2NTc0MDky.jpg")`
    };

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
