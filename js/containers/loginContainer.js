import React from 'react';
import { connect } from 'react-redux';
import Login from '../pages/Login';

class LoginContainer extends React.Component {
  render() {
    return (
      <Login />
    );
  }
}

export default connect()(LoginContainer);
