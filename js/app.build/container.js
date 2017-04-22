import React from 'react';
import { connect } from 'react-redux';
import Build from './page';

class BuildContainer extends React.Component {
  render() {
    return (
      <Build />
    );
  }
}

export default connect()(BuildContainer);
