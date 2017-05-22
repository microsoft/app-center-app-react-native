import React, { PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from './page';
import { loginRequest } from './action';

class LoginContainer extends React.Component {
  render() {
    return (
      <Login {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return { login: state.login };
};

const mapDispatchToProps = (dispatch) => {
  const loginAction = bindActionCreators(loginRequest, dispatch);
  return {
    loginAction
  };
};

const connected = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

const formed = reduxForm({
  form: 'login'
})(connected);

export default formed;
