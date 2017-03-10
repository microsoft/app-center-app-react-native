import React from 'react';
import { connect } from 'react-redux';
import ManageApp from '../../../pages/app/Start/ManageApp';

class ManageAppContainer extends React.Component {
  render() {
    return (
      <ManageApp />
    );
  }
}

export default connect()(ManageAppContainer);
