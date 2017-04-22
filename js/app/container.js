import React from 'react';
import { connect } from 'react-redux';
import App from './page';

class AppContainer extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

export default connect()(AppContainer);
