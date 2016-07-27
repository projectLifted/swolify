import React from 'react';

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="panel panel-default" id="user-widget">

        <div className="search-result-heading"><center>
          <i className="fa fa-user" aria-hidden="true"></i> Paul Day</center>
        </div>

        <div className="profile-img"></div>
        <div className="user-widget-content">
          <div className="search-widget-content">
            <p>Age: 33 Years Old</p>
            <p>Weight: 155 lbs</p>
            <p>Height: 5 ft 9 in</p>
            <p>Body Type: Mesomorph</p>
            <p>Location: Dallas, Texas</p>
          </div>

        </div>
      <div className="user-widget-footer">

        <a href="#"><i className="fa fa-user-plus" aria-hidden="true"></i> Follow</a>
      </div>
      </div>
    );
  }
}
