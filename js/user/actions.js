import { REQUEST_USER, RECEIVE_USER, RECEIVE_USER_ERROR} from './constants';

export function requestUser() {
  return {
    type: REQUEST_USER
  };
}

export function receiveUser(data) {
  return {
    type: RECEIVE_USER,
    user: data
  };
}
