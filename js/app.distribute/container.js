import React from 'react';
import { connect } from 'react-redux';
import Distribute from './page';

class DistributeContainer extends React.Component {
  render() {
    return (
      <Distribute />
    );
  }
}

export default connect()(DistributeContainer);
