import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import rootSaga from './index-sagas';
import MobileCenterApp from './mobilecenter';
import { AsyncStorage } from 'react-native';

const store = configureStore();
store.runSaga(rootSaga);

const setup = () => (
  <Provider store={store}>
    <MobileCenterApp />
  </Provider>
);

export default setup;