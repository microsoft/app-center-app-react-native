/**
 * Microsoft Mobile Center App
 *
 * Copyright (c) Microsoft Corporation
 *
 * All rights reserved.
 *
 * MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software. THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF
 * ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
 * THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

// import {Actions, Scene, Router} from 'react-native-router-flux';

var React = require('react');
var ReactNative = require('react-native');
var t = require('tcomb-form-native');

var {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
} = ReactNative;

global.Buffer = global.Buffer || require('buffer').Buffer;
 
var STORAGE_KEY = 'id_token';

var Form = t.form.Form;

var Person = t.struct({
  username: t.String,
  password: t.String
});

const options = {};

let myApiUrl       = "http://localhost:3001";
let quotePath      = "/api/protected/random-quote";
let userPath       = "/users";
let userCreatePath = "/sessions/create";

let mc_api_url = "https://api.mobile.azure.com";
let get_user   = "/v0.1/user";
let get_apps   = "/v0.1/apps";
let get_tokens = "/v0.1/api_tokens";

let userName = "buptkang@gmail.com";
let userPassword = "Kb@241307684";

let storedSessionTokens = "2eb6d0e2250779ad71acde8f383158b48aa0b4b6";

var MobileCenter = React.createClass({

  async _onValueChange(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  },

  async _getUserApps() {
    var DEMO_TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
    fetch(`${mc_api_url}${get_apps}`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'X-API-Token': storedSessionTokens
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      responseData.map(app => AlertIOS.alert("Your Apps:",app.display_name));
      //AlertIOS.alert("Your Apps:", responseData.map(app=>))
    })
    .done();
  },

  async _userLogout() {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      AlertIOS.alert("Logout Success!")
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  },

  _userSignup() {
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      fetch(`${myApiUrl}${userPath}`, {
        method: "POST", 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: value.username, 
          password: value.password, 
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        this._onValueChange(STORAGE_KEY, responseData.id_token),
        AlertIOS.alert(
          "Signup Success!",
          "Click the button to get a Chuck Norris quote!"
        )
      })
      .done();
    }
  },

  _userLogin() { 
    let concatStr = userName + ':' + userPassword;
    let hashStr = new Buffer(concatStr).toString('base64');
    //TODO: check null;
    //AlertIOS.alert(hashStr);
    // var value = this.refs.form.getValue();
    // if (value) { // if validation fails, value will be null
      //fetch(`${myApiUrl}${userCreatePath}`, {
      fetch(`${mc_api_url}${get_tokens}`, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Basic ' + hashStr
        }
      })
      .then((response) => response.json())
      .then((responseData) => {
        AlertIOS.alert(
          "Login Success!",
          //responseData[0].id
        ),
        this._onValueChange(STORAGE_KEY, responseData[0].id)
      })
      .done();
    // } 
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>Mobile Center RN Experiment</Text>
        </View>
        <View style={styles.row}>
          <Form
            ref="form"
            type={Person}
            options={options}
          />
        </View>  
        <View style={styles.row}>
          <TouchableHighlight style={styles.button} onPress={this._userLogin} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this._userLogout} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>    
          <TouchableHighlight onPress={this._getUserApps} style={styles.button}>
            <Text style={styles.buttonText}>Get your apps!</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
});
 
var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
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
  },
});

module.exports = MobileCenter;
