import { applyMiddleware, compose } from 'redux';
import Reactotron from 'reactotron-react-native';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from './index-reducer';

const middlewares = [];
const createLogger = require('redux-logger');

// create our new saga monitor
const sagaMonitor = Reactotron.createSagaMonitor();

// configure saga middleware
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development'){
  const logger = createLogger();
  middlewares.push(logger);
}
// const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
  // const store = createStoreWithMiddleware(rootReducer, initialState);
  const store = Reactotron.createStore(rootReducer, initialState, applyMiddleware(...middlewares));
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  // install saga run
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
