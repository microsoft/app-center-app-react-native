import React from 'react';
import { connect } from 'react-redux';
import Distribute from '../../pages/app/Distribute';

class DistributeContainer extends React.Component {
  render() {
    return (
      <Distribute />
    );
  }
}

export default connect()(DistributeContainer);
