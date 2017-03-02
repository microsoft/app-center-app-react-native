import React from 'react';
import { connect } from 'react-redux';
import App from '../pages/App';

class AppContainer extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

export default connect()(AppContainer);
