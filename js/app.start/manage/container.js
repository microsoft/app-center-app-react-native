import React from 'react';
import { connect } from 'react-redux';
import ManageApp from './page';

class ManageAppContainer extends React.Component {
  render() {
    return (
      <ManageApp />
    );
  }
}

export default connect()(ManageAppContainer);
