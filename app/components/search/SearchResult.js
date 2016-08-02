import React from 'react';
import moment from 'moment';

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFollowing: false
    }
  }


  componentWillMount() {
    const checkFollowing = () => {
    var followingArray = this.props.authUser.following
    for (var i = 0; i < followingArray.length; i++) {

      if ( followingArray[i] === this.props.users._id)  {
        this.setState({ isFollowing : true })
      }

    }
  }
  checkFollowing();
  }



  render() {
    const profileImg = {
      backgroundImage: `url("${this.props.pic}")`
    };

    const birthAge = moment().diff(this.props.age, 'years');


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
          { this.state.isFollowing
            ?
              <button className="btn btn-primary"><i className="fa fa-user-times" aria-hidden="true"></i> Unfollow</button>
            :
              <button className="btn btn-info"><i className="fa fa-user-plus" aria-hidden="true"></i> Follow</button>
          }
          </div>
        </a>

    </div>

    );
  }
}
