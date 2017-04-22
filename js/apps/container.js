import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Apps from './page';
import { requestAppList } from './actions';

class AppsContainer extends React.Component {
  render() {
    return (
      <Apps {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    apps: state.apps
  };
};

const mapDispatchToProps = (dispatch) => {
  const requestAppAction = bindActionCreators(requestAppList, dispatch);
  return {
    'requestAppAction': requestAppAction
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppsContainer);
