import React from 'react';

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>


        <a href="#" className="list-group-item">
          <div className="friend-photo"></div>
          <div className="list-group-content">
            <h4 className="list-group-item-heading">Paul Day</h4>
            <p className="list-group-item-text">
              33 Years Old, 155 lbs, 5 ft 9 in, Dallas, Texas
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
