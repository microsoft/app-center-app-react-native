'use strict';

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native';
import ErrorMessage from './ErrorMessage';

import { loginRequest } from '../actions/login';


var RNForm = t.form.Form;

var User = t.struct({
    name: t.String,
    password: t.String
});

//Encapsulate tcomb-form-native https://github.com/gcanti/tcomb-form-native#api

var options = {}; // optional rendering options (see documentation)

class Form extends React.Component {

    onPress () {

      let { dispatch } = this.props;

      var value = this.refs.form.getValue();
      if (value) { // if validation fails, value will be null
        // console.log(value.name); // value here is an instance of Person
        dispatch(loginRequest({ username: value.name, password: value.password }));
      }else{
        //TODO
      }
    }

    render () {
        return (
           <View style={styles.container}>
                <RNForm ref="form" type={User} options={options} />
                <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Click</Text>
                </TouchableHighlight>
            </View>
        );
    }
};

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default Form;