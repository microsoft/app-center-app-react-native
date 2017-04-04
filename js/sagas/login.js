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

import { hashSync } from 'bcryptjs';
import genSalt from '../auth/salt';
import auth from '../auth';
import { take, takeEvery, call, put, fork } from 'redux-saga/effects';
import {   
  SENDING_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  SET_AUTH,
  LOGOUT,
  CHANGE_FORM,
  REQUEST_ERROR,
  LOGIN_SUCCESS, 
  LOGIN_ERROR } from '../actions/types';

import { Actions } from 'react-native-router-flux'; //react-native-redux-flux router

/**
 * Effect to handle authorization
 * @param  {string} username               The username of the user
 * @param  {string} password               The password of the user
 * @param  {object} options                Options
 * @param  {boolean} options.isRegistering Is this a register request?
 */
export function* authorize({username, password, isRegistering}) {
  // send an action to tell Redux we are sending a request
  yield put({type: SENDING_REQUEST, sending: true});

  // try to register or login the user, depending on the request.
  try {
    let salt = genSalt(username);
    let hash = hashSync(password, salt);
    let reponse;
    if (isRegistering) {
      response = yield call(auth.register, username, hash);
    } else {
      response = yield call(auth.login, username, hash);
    }
    return response;
  } catch (error) {
    yield put({type: REQUEST_ERROR,error: error.message});
    return false;
  } finally {
    yield put({type: SENDING_REQUEST, sending: false});
  }
}

/**
 * Effect to handle logging out
 */
export function * logout() {
  // We tell Redux we're in the middle of a request
  yield put({type: SENDING_REQUEST, sending: true});

  // Similar to above, we try to log out by calling the `logout` function in the
  // `auth` module. If we get an error, we send an appropiate action. If we don't,
  // we return the response.
  try {
    let response = yield call(auth.logout);
    yield put({type: SENDING_REQUEST, sending: false});
    return response;
  } catch (error) {
    yield put({type: REQUEST_ERROR, error: error.message});
  }
}

/**
 * Login Saga
 * @param {*} action 
 */
export function* loginFlow() {

  //generate sagas, do not block program
  while (true) {
    let request = yield take(LOGIN_REQUEST);
    let {username, password} = request.data;

    // A `LOGOUT` action may happen while the `authorize` effect is going on, which may
    // lead to a race condition. This is unlikely, but just in case, we call `race` which
    // returns the "winner", i.e. the one that finished first
    let winner = yield race({
       auth: call(authorize, {username, password, isRegistering: false}),
       logout: take(LOGOUT)
    });

    if(winner.auth) {
      yield put({type: SET_AUTH, newAuthState: true});
      yield put({type: CHANGE_FORM, newFormState: {username: '', password: ''}});
      Actions.tabbar();
    }else{
      yield put({type: SET_AUTH, newAuthState: false });
      yield call(logout);
      Actions.login();
    }
  }
}

/**
 * Log out saga
 * This is basically the same as the `if (winner.logout)` of above, just written
 * as a saga that is always listening to `LOGOUT` actions
 */
export function * logoutFlow () {
  while (true) {
    yield take(LOGOUT);
    yield put({type: SET_AUTH, newAuthState: false});
    yield call(logout);
    Actions.login();
  }
}
