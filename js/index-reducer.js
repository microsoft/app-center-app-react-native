import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import client from './auth/reducer';
import login from './login/reducer';
import apps from './apps/reducer';
import user from './user/reducer';
import appAnalysis from './appAnalytics/reducer';
import distributeReleases from './appDistribute/reducer';
import { ActionConst } from 'react-native-router-flux';

const initialState = {
  scene: {},
};

function RouteReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionConst.FOCUS:
      return Object.assign({}, state, {
        scene: action.scene
      });
    default:
      return state;
  }
}

const IndexReducer = combineReducers({
  RouteReducer,
  client,
  login,
  form,
  apps,
  user,
  appAnalysis,
  distributeReleases
});

export default IndexReducer;
