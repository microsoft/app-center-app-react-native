import React from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import configureStore from './configureStore';
import rootSaga from './index-sagas';
import MobileCenterApp from './mobilecenter';

const store = configureStore();
store.runSaga(rootSaga);

const setup = () => (
  <Provider store={store}>
    <MobileCenterApp />
  </Provider>
);

export default setup;
