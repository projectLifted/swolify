import React from 'react';

import '../scss/primary.scss';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>

        <p>For questions and comments: <a href="mailto:info@swolify.win">info@swolify.win</a></p>

      </footer>

    );
  }
}
