import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

export default class User extends React.Component {

  componentDidMount(){
    const { requestUserAction } = this.props;
    requestUserAction();
  }

  render() {
    const { state } = this.props;
    return (
        <View style={styles.container}>
          <Card styles={{card: {width: 300, height: 100 }}}>
            <CardTitle>
              <Text style={styles.title}>{state.user.display_name}</Text>
            </CardTitle>
            <CardContent>
              <Text>{state.user.email}</Text> 
              <Text>{state.user.name}</Text>
            </CardContent>
          </Card>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginBottom: 60
  },
  title: {
    fontSize: 16,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  },
  card: {
    width: 300
  }
});