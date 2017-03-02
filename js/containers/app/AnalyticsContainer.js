import React from 'react';
import { connect } from 'react-redux';
import Analytics from '../../pages/app/Analytics';

class AnalyticsContainer extends React.Component {
  render() {
    return (
      <Analytics />
    );
  }
}

export default connect()(AnalyticsContainer);
