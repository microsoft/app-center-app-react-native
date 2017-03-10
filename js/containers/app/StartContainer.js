import React from 'react';
import { connect } from 'react-redux';
import Start from '../../pages/app/Start';

class StartContainer extends React.Component {
  render() {
    return (
      <Start />
    );
  }
}

export default connect()(StartContainer);
