/*
 * Actions describe changes of state in your application
 */

// We import constants to name our actions' type
import {
  LOGIN_REQUEST,
} from './constants';

/**
 * Tells the app we want to log in a user
 * @param  {object} data          The data we're sending for log in
 * @param  {string} data.username The username of the user to log in
 * @param  {string} data.password The password of the user to log in
 */
export function loginRequest (username, password) {
  return {
    type: LOGIN_REQUEST,
    username,
    password
  };
}
