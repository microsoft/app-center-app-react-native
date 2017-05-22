import { takeEvery, put, call, fork, take } from 'redux-saga/effects';

import { AsyncStorage } from 'react-native';
import Reactotron from 'reactotron-react-native';
// import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import {
    REQUEST_ACTIVE_DEVICE_COUNTS,
    RECEIVE_ACTIVE_DEVICE_COUNTS,
    RECEIVE_ACTIVE_DEVICE_COUNTS_ERRORS
} from './constants';
import { handleApiErrors } from '../lib/api-errors';
import { toastShort } from '../utils/ToastUtil';

import * as navTypes from '../router/constants';

function appAnalysisDeviceCountApi(token, ownerName, appName, startDate) {
    return fetch(`https://api.mobile.azure.com/v0.1/apps/${ownerName}/${appName}/analytics/active_device_counts?start=2017-04-10`,{
        method: 'GET',
        headers: {
            'ZUMO-API-VERSION': '2.0.0',
            'X-API-Token': token
        }
    })
    .then(handleApiErrors)
    .then(response => response.json())
    .then(data => data.daily);
}

function* fetchAppAnalysisDeviceCount() {
    try {
      let token = yield AsyncStorage.getItem('token');
      // if (!token) Actions.login();
      if (!token) yield put({ type: navTypes.RESET_TO_LOGIN });
      let ownerName, appName, startDate;
      yield AsyncStorage.getItem('app', (error, result) => {
          let appJSON = JSON.parse(result);
          ownerName = appJSON.owner.name;
          appName = appJSON.name;
      });
      //demo purpose ^_&
      startDate = JSON.stringify(moment().subtract(7, 'days').format());
      const response = yield call(appAnalysisDeviceCountApi, token, ownerName, appName, startDate);
    //   Reactotron.log(response);
      yield put({type: RECEIVE_ACTIVE_DEVICE_COUNTS, response});
    } catch (error) {
      yield put({type: RECEIVE_ACTIVE_DEVICE_COUNTS_ERRORS, error});
      toastShort(error);
    }
}

function* watchFetchAppAnalysisDeviceCount() {
    while (true) {
        yield take(REQUEST_ACTIVE_DEVICE_COUNTS);
        yield fork(fetchAppAnalysisDeviceCount);
    }
}

export default watchFetchAppAnalysisDeviceCount;
