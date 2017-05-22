import { fork } from 'redux-saga/effects';
import LoginSaga from './login/sagas';
import AppsSaga from './apps/sagas';
import UserSaga from './user/sagas';
import AppAnalyticsSaga from './appAnalytics/sagas';
import AppDistributeSaga from './appDistribute/sagas';

export default function* IndexSaga() {
  yield [
    LoginSaga(),
    AppsSaga(),
    UserSaga(),
    AppAnalyticsSaga(),
    AppDistributeSaga()
  ];
}
