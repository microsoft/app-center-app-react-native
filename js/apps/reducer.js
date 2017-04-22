import { REQUEST_APPS, RECEIVE_APPS, RECEIVE_APPS_ERROR } from './constants';

const initState = {
  isFetching: false,
  successful: false,
  apps: [],
  errors: []
};

export default function apps(state = initState, action) {
  switch (action.type) {
    case REQUEST_APPS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_APPS:
      return Object.assign({}, state, {
        isFetching: false,
        successful: true,
        apps: action.response
      });
    case RECEIVE_APPS_ERROR:
      return Object.assign({}, state, {
        successful: false,
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
}