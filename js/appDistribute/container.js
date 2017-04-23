import React from 'react';
import { connect } from 'react-redux';
import Distribute from './page';
import { bindActionCreators } from 'redux';
import { requestDistributeReleases } from './actions';

class DistributeContainer extends React.Component {
  render() {
    return (
      <Distribute {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.distributeReleases
  };
};

const mapDispatchToProps = (dispatch) => {
  const requestDistributeReleasesAction = bindActionCreators(requestDistributeReleases, dispatch);
  return {
    'requestDistributeReleasesAction': requestDistributeReleasesAction
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DistributeContainer);
