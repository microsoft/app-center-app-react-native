import React from 'react';
import { connect } from 'react-redux';
import Test from '../../pages/app/Test';

class TestContainer extends React.Component {
  render() {
    return (
      <Test />
    );
  }
}

export default connect()(TestContainer);
