import React from 'react';
import {
  Dimensions,
  Animated
} from 'react-native';
// import { Actions } from 'react-native-router-flux';
import store from 'react-native-simple-store';
import * as navTypes from '../router/constants';

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
const splashImg = require('../img/splash.png');

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0.4)
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.bounceValue, { toValue: 2.0, duration: 1000 }
    ).start();
    this.timer = setTimeout(() => {
      store.get('isInit')
        .then((isInit) => {
          if (!isInit) {
            // Actions.login();
            this.props.navigation.dispatch({ type: navTypes.RESET_TO_LOGIN });
          }
        });
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <Animated.Image
        style={{ width: maxWidth,
          height: maxHeight,
          transform: [{ scale: this.state.bounceValue }] }}
        source={splashImg}
      />
    );
  }
}
