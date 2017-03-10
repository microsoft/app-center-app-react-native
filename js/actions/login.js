import { LOGIN_REQUEST, LOGIN_SUCCESS , LOGIN_ERROR } from './types';

export function loginRequest({ username, password }) {
  return {
    type: LOGIN_REQUEST,
    username,
    password
  };
}

export function loginSuccess(response) {
  return {
    type: LOGIN_SUCCESS,
    response
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  };
}
