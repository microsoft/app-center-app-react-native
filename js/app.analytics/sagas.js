import { 
    REQUEST_ACTIVE_DEVICE_COUNTS, 
    RECEIVE_ACTIVE_DEVICE_COUNTS,
    RECEIVE_ACTIVE_DEVICE_COUNTS_ERRORS
} from './constants';
import { handleApiErrors } from '../lib/api-errors';
import { AsyncStorage } from 'react-native';
import Reactotron from 'reactotron-react-native';
import { Actions } from 'react-native-router-flux';
import { moment } from 'moment';
import { toastShort } from '../utils/ToastUtil';

function appAnalysisDeviceCountApi(token, ownerName, appName, startDate) {
    return fetch(`https://api.mobile.azure.com/v0.1/apps/${ownerName}/${appName}/analytics/active_device_counts?start=${startDate}`,{
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

      Reactotron.log("test test test");

      let token = yield AsyncStorage.getItem('token');
      if (!token) Actions.login();

      let ownerName, appName, startDate;
      yield AsyncStorage.getItem('app', (error, result) => {
          let appJSON = JSON.parse(result);
          ownerName = appJSON.owner.name;
          appName = appJSON.name;
      });
      //demo purpose ^_&
      startDate = moment().subtract(7, "days");

      Reactotron.log(ownerName);
      Reactotron.log(appName);
      Reactotron.log(startDate);

      const response = yield call(appAnalysisDeviceCountApi, token, ownerName, appName, startDate);

      yield put({type: RECEIVE_ACTIVE_DEVICE_COUNTS, response});
    } catch (error) {
      yield put({type: RECEIVE_ACTIVE_DEVICE_COUNTS_ERRORS, error});
      toastShort(error);
    }
}

function* watchFetchAppAnalysisDeviceCount() {
    try {
        while (true) {
            yield take(REQUEST_ACTIVE_DEVICE_COUNTS);
            yield fork(fetchAppAnalysisDeviceCount);
        }}
    catch (error) {
    }
}

export default watchFetchAppAnalysisDeviceCount;