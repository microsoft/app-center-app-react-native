import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import client from './auth/reducer';
import login from './login/reducer';
import apps from './apps/reducer';
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
  apps
});

export default IndexReducer;
