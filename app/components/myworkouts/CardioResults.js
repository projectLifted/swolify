import React from 'react';

export default class CardioResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      testDate: "2 months ago"
    }

  }

  render() {
    return (
      <tr>
        <td>{this.state.testDate}</td>
        <td>Treadmill Run</td>
        <td>1</td>
        <td>10</td>
        <td>166</td>
        <td><button className="btn btn-danger">X</button></td>
      </tr>

    );
  }
}
