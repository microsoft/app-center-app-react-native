import React from 'react';
import { connect } from 'react-redux';
import Test from './page';

class TestContainer extends React.Component {
  render() {
    return (
      <Test />
    );
  }
}

export default connect()(TestContainer);
