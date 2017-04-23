import { takeEvery, put, call, fork, take } from 'redux-saga/effects';
import { REQUEST_USER, RECEIVE_USER, RECEIVE_USER_ERROR} from './constants';
import { handleApiErrors } from '../lib/api-errors';
import { toastShort } from '../utils/ToastUtil';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Reactotron from 'reactotron-react-native';

function userApi(token) {
  return fetch("https://api.mobile.azure.com/v0.1/user", {
    method: 'GET',
    headers: {
      'ZUMO-API-VERSION': '2.0.0',
      'X-API-Token': token
    }
  })
  .then(handleApiErrors)
  .then(response => response.json());
}

function* fetchUser() {
  try {
    let token = yield AsyncStorage.getItem('token');
    if (!token) Actions.login();
    const response = yield call(userApi, token);
    yield put({ type: RECEIVE_USER, response });
  } catch (error) {
    yield put({ type: RECEIVE_USER_ERROR, error });
    toastShort(error);
  }
}

function* watchFetchUser() {
    while (true) {
      yield take(REQUEST_USER);
      yield fork(fetchUser);
    }
}

export default watchFetchUser;
