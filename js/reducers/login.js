import { LOGIN_REQUEST, LOGIN_SUCCESS , LOGIN_ERROR } from '../actions/types';

export default function login(state = {
  status: 'init'
}, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        status: 'loading'
      };
    case LOGIN_SUCCESS:
      return {
        status: 'logined',
        username: action.response.username,
        token: action.response.token
      };
    case LOGIN_ERROR:
      return {
        status: 'error',
        error: action.error
      };
    default:
      return state;
  }
}
