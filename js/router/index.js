import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from './page';

const AppWithNavigationState = ({ dispatch, nav }) => {
  console.log('1', nav);
  return (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
  );
};

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ nav: state.nav });

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState);
