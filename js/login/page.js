import React, { PropTypes } from 'react';
import {
  StyleSheet, Text,
  View, TextInput, TouchableHighlight, Alert, Image, TouchableOpacity, Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Field } from 'redux-form';
import LoadingView from './components/LoadingView';
import MessagesView from './components/MessagesView';

const propTypes = {
  login: PropTypes.object.isRequired,
  loginAction: PropTypes.func
};

const renderInput = ({ input: { onChange, ...restInput } }) => {
  return (<TextInput style={styles.input} onChangeText={onChange} {...restInput} />);
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: 'default', password: 'default' };
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    const { loginAction } = this.props;
    loginAction(values.email, values.password);
  }

  renderForm() {
    const { handleSubmit } = this.props;
    return (
      <View>
        <Text>UserName: </Text>
        <Field name="email" component={renderInput} />
        <Text>Password: </Text>
        <Field name="password" component={renderInput} />
        <Button onPress={handleSubmit(this.submit)} title="Submit" color="#48BBEC" />
      </View>
    );
  }

  render() {
    const {
      login: {
        requesting,
        successful,
        messages,
        errors,
      }
    } = this.props;
    let pageContent;
    let messageContent;

    if (requesting) {
      return <LoadingView />;
    } 

    pageContent = this.renderForm();

    if (errors.length) {
      messageContent = <MessagesView errors = {errors} />
    }

    return (
        <View style={styles.container}>
          <Image style={styles.backgroundImg} source={require('../img/splash.png')} />
          <Text style={styles.title}>
            Login
          </Text>
          { pageContent }
          { messageContent }
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  backgroundImg: {
    width: 150,
    height: 140,
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250,
    justifyContent: 'center'
  }
});

Login.propTypes = propTypes;
export default Login;
