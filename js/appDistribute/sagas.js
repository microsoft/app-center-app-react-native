import { takeEvery, put, call, fork, take } from 'redux-saga/effects';
import { 
    REQUEST_DISTRIBUTE_RELEASES, 
    RECEIVE_DISTRIBUTE_RELEASES,
    RECEIVE_DISTRIBUTE_RELEASES_ERROR 
} from './constants';
import { handleApiErrors } from '../lib/api-errors';
import { toastShort } from '../utils/ToastUtil';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Reactotron from 'reactotron-react-native';

function distributeReleasesApi(token, ownerName, appName) {
    return fetch(`https://api.mobile.azure.com/v0.1/apps/${ownerName}/${appName}/releases`, {
        method: 'GET',
        headers: {
            'ZUMO-API-VERSION': '2.0.0',
            'X-API-Token': token
        }
    })
    .then(handleApiErrors)
    .then(response => response.json());
}

function* fetchDistributeReleases() {
    try {
        let token = yield AsyncStorage.getItem('token');
        if (!token) Actions.login();
        let ownerName, appName;
        yield AsyncStorage.getItem('app', (error, result) => {
            let appJSON = JSON.parse(result);
            ownerName = appJSON.owner.name;
            appName = appJSON.name;
        });
        const response = yield call(distributeReleasesApi, token, ownerName, appName);
        //Reactotron.log(response);
        yield put({type: RECEIVE_DISTRIBUTE_RELEASES, response});
        } catch (error) {
            yield put({type: RECEIVE_DISTRIBUTE_RELEASES_ERROR, error});
            toastShort(error);
        }
}

function* watchFetchAppDistributeReleases() {
    while (true) {
        yield take(REQUEST_DISTRIBUTE_RELEASES);
        yield fork(fetchDistributeReleases);
    }
}

export default watchFetchAppDistributeReleases;