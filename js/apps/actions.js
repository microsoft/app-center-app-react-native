import { REQUEST_APPS, RECEIVE_APPS, SELECT_APP } from './constants';

export function requestAppList() {
  return {
    type: REQUEST_APPS
  };
}

export function receiveAppList(data) {
  return {
    type: RECEIVE_APPS,
    apps: data,
  };
}
