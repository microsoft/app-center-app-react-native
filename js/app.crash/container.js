import React from 'react';
import { connect } from 'react-redux';
import Crash from './page';

class CrashContainer extends React.Component {
  render() {
    return (
      <Crash />
    );
  }
}

export default connect()(CrashContainer);
