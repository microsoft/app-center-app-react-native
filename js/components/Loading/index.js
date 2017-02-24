import React from 'react';
import { View } from 'react-native';
import styles from './style';

export default class Loading extends React.Component {
  render() {
    return (<View style={styles.loading} />);
  }
}
