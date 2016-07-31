import React from 'react';

export default class WeightliftingResults extends React.Component {
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
        <td>Bench Press</td>
        <td>122</td>
        <td>166</td>
        <td><button className="btn btn-danger">X</button></td>
      </tr>

    );
  }
}
