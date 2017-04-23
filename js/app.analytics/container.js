import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Analytics from './page';
import { REQUEST_ACTIVE_DEVICE_COUNTS } from './actions';

class AnalyticsContainer extends React.Component {
  render() {
    return (
      <Analytics {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appAnalysis: state.appAnalysis
  };
};

const mapDispatchToProps = (dispatch) => {
  const requestAppAnalysisAction = bindActionCreators(requestAppList, dispatch);
  return {
    'requestAppAnalysisAction': requestAppAnalysisAction
  };
};

export default connect()(AnalyticsContainer);
