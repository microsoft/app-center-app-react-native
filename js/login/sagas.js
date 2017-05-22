import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects';
import Reactotron from 'reactotron-react-native';
// import { Actions } from 'react-native-router-flux';
import { NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'react-native';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './constants';

import * as navTypes from '../router/constants';

import {
  setClient,
  unSetClient
} from '../auth/actions';

import {
  CLIENT_UNSET
} from '../auth/constants';

import { handleApiErrors } from '../lib/api-errors';

const base64 = require('base-64');

function loginApi(username, password) {
  const hash = base64.encode(`${username}:${password}`);
  return fetch('https://api.mobile.azure.com/v0.1/api_tokens', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Basic ${hash}`
    }
  })
  .then(handleApiErrors)
  .then(response => response.json())
  .then(token => token.api_token)
  .then(tokenId => AsyncStorage.setItem('token', tokenId));
}

function* logout() {
  yield put(unSetClient());
  AsyncStorage.removeItem('token');
  // Actions.login();
  yield put({ type: navTypes.RESET_TO_LOGIN });
}

function* loginFlow(username, password) {
  let token;
  try {
    token = yield call(loginApi, username, password);
    // yield put(setClient(token));
    yield put({ type: LOGIN_SUCCESS });
    // Actions.tabbar();
    // put(NavigationActions.navigate({ routeName: 'tabbar' }));
    yield put({ type: navTypes.RESET_TO_TABBAR });
  } catch (error) {
    yield put({ type: LOGIN_ERROR, error });
  } finally {
    if (yield cancelled()) {
      // Actions.login();
      // put(NavigationActions.navigate({ routeName: 'login' }));
      yield put({ type: navTypes.RESET_TO_LOGIN });
    }
  }
  return token;
}

function* loginWatcher() {
  while (true) {
    const { username, password } = yield take(LOGIN_REQUEST);
    const task = yield fork(loginFlow, username, password);
    const action = yield take([CLIENT_UNSET, LOGIN_ERROR]);
    if (action.type === CLIENT_UNSET) yield cancel(task);
    yield call(logout);
  }
}

export default loginWatcher;
