import { 
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR,
  LOGIN_REQUEST, 
  LOGIN_SUCCESS , 
  LOGIN_ERROR } from '../actions/types';

import auth from '../auth';

// The initial application state
let initState = {
  formState: {
    username: '',
    password: ''
  }, 
  error: '',
  currentlySending: false,
  loggedIn: auth.loggedIn()
};

export default function login(state=initState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return {
        ...state,
        formState: action.newFormState
      };
    case SET_AUTH:
      return {
        ...state,
        loggedIn: action.newAuthState
      };
    case SENDING_REQUEST:
      return {
        ...state,
        currentlySending: action.sending
      };
    case REQUEST_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
