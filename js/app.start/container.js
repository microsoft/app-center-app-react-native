import React from 'react';
import { connect } from 'react-redux';
import Start from './page';

class StartContainer extends React.Component {
  render() {
    return (
      <Start />
    );
  }
}

export default connect()(StartContainer);
