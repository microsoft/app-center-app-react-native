import { takeEvery, put, call, fork, take } from 'redux-saga/effects';
import { REQUEST_APPS, RECEIVE_APPS, RECEIVE_APPS_ERROR } from './constants';
import { handleApiErrors } from '../lib/api-errors';
import { toastShort } from '../utils/ToastUtil';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Reactotron from 'reactotron-react-native';

function appsApi(token) {
  return fetch("https://api.mobile.azure.com/v0.1/apps", {
    method: 'GET',
    headers: {
      'ZUMO-API-VERSION': '2.0.0',
      'X-API-Token': token
    }
  })
  .then(handleApiErrors)
  .then(response => response.json());
}

function* fetchApps() {
  try {
    let token = yield AsyncStorage.getItem('token');
    if (!token) Actions.login();
    const response = yield call(appsApi, token);

    // Sort the apps alphbetically, for display purposes
    response.sort(function (app1, app2) {
      return app1.display_name.localeCompare(app2.display_name);
    });

    // TODO: Maybe show organization apps differently, but for now they are in the single overall app list
    
    yield put({ type: RECEIVE_APPS, response });
  } catch (error) {
    yield put({ type: RECEIVE_APPS_ERROR, error });
    toastShort(error);
  }
}

function* watchFetchAppList() {
    while (true) {
      yield take(REQUEST_APPS);
      yield fork(fetchApps);
    }
}

export default watchFetchAppList;