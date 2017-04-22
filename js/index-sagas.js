import { fork } from 'redux-saga/effects';
import LoginSaga from './login/sagas';
import AppsSaga from './apps/sagas';

export default function* IndexSaga () {
  yield [
    LoginSaga(),
    AppsSaga()
  ];
}
