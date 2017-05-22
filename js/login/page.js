import React, { PropTypes } from 'react';
import {
  StyleSheet, Text,
  View, TextInput, TouchableHighlight, Alert, Image, TouchableOpacity, Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Field } from 'redux-form';
import LoadingView from './components/LoadingView';
import MessagesView from './components/MessagesView';



const SignInButton = (props) => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.signInButton}
    >
      <Text style={{ color: 'white', fontSize: 20 }}>Sign in</Text>
    </TouchableHighlight>
  );
};

const propTypes = {
  login: PropTypes.object.isRequired,
  loginAction: PropTypes.func
};


const renderUsernameInput = ({ input: { onChange, ...restInput } }) => {
  return (
    <TextInput
      placeholder="Email or username"
      autoCapitalize="none"
      style={styles.input}
      onChangeText={onChange}
      {...restInput}
    />
  );
};

const renderPasswordInput = ({ input: { onChange, ...restInput } }) => {
  return (
    <TextInput
      placeholder="Password"
      autoCapitalize="none"
      secureTextEntry
      style={styles.input}
      onChangeText={onChange}
      {...restInput}
    />
  );
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: 'default', password: 'default' };
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    const { loginAction } = this.props;
    loginAction(values.username, values.password);
  }

  renderForm() {
    const { handleSubmit } = this.props;
    return (
      <View>
        <Field name="username" component={renderUsernameInput} />
        <Field name="password" component={renderPasswordInput} />
        <SignInButton onPress={handleSubmit(this.submit)} title="Submit" color="#48BBEC" />
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
      messageContent = <MessagesView errors={errors} />;
    }

    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImg}
          source={require('../img/splash.png')}
        />
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
    padding: 20,
    backgroundColor: '#CCC',
    flex: 1
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
  input: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 0.3,
    marginTop: 10,
    height: 37,
    padding: 4,
    justifyContent: 'center'
  },
  signInButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#34A853',
    marginTop: 20
  }
});

Login.propTypes = propTypes;
export default Login;
