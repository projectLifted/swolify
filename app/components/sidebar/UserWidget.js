import React from 'react';

import '../../scss/primary.scss';

export default class UserWidget extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <div className="panel panel-default" id="user-widget">

        <h1>Hello from user sidebar</h1>

      </div>

    );
  }
}
