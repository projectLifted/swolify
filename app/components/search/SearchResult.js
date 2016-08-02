import React from 'react';
import moment from 'moment';

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   user: {}
    // }
  }

  // componentWillMount() {

	// }

  render() {


    let profileImg = {
      backgroundImage: `url("${this.props.pic}")`
    };

    let birthAge = moment().diff(this.props.age, 'years');


    return (
      <div>


        <a href="#" className="list-group-item">
          <div style={profileImg} className="friend-photo"></div>
          <div className="list-group-content">
            <h4 className="list-group-item-heading">{this.props.name}</h4>
            <p className="list-group-item-text">
              {birthAge} years old, {this.props.weight} lbs, {this.props.heightFeet} ft {this.props.heightInches}, in {this.props.location}
            </p>

          </div>
          <div className="list-group-btn-box">
            <button className="btn btn-info"><i className="fa fa-user-plus" aria-hidden="true"></i> Follow</button>
          </div>
        </a>

    </div>

    );
  }
}
