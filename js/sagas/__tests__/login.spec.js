/**
 * Microsoft Mobile Center App
 *
 * Copyright (c) Microsoft Corporation
 *
 * All rights reserved.
 *
 * MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software. THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF
 * ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
 * THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

import { takeEvery, call, put, fork } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../../actions/types';
import { watchRequestLogin, loginFlow, authorize } from '../login';
import { loginAPI } from '../../utils/RequestUtil';

describe('Sagas/ login', () => {
  describe('watchRequestLogin', () => {
    const generator = watchRequestLogin();
    it('should take every login request', () => {
      const expected = takeEvery(LOGIN_REQUEST, loginFlow);
      const actual = generator.next().value;
      expect(expected.name).toEqual(actual.name);
    });
  });
  describe('loginFlow', () => {
    const generator = loginFlow({
      type: LOGIN_REQUEST,
      username: 'buptkang@gmail.com',
      password: 'Kb@241307684'
    });
    it('should fork a authorize test', () => {
      const expected = fork(authorize, {
        username: 'buptkang@gmail.com',
        password: 'Kb@241307684'
      });
      const actual = generator.next().value;
      expect(expected).toEqual(actual);
    });
  });

  describe('Authorize', () => {
    const generator = authorize({
      username: 'buptkang@gmail.com',
      password: 'Kb@241307684'
    });

    it('should call loginAPI', () => {
      const expected = call(loginAPI, {
        username: 'buptkang@gmail.com',
        password: 'Kb@241307684'
      });
      const actual = generator.next().value;
      expect(expected).toEqual(actual);
    });

    it('should handle login success', () => {
      const getResponse = () => ({
        username: 'denny',
        token: 'fake token'
      });
      const expected = put({
        type: LOGIN_SUCCESS,
        response: {
          username: 'denny',
          token: 'fake token'
        }
      });
      const actual = generator.next(getResponse()).value;
      expect(expected).toEqual(actual);
    });

    it('should handle login error', () => {
      const error = 'error message';
      const expected = put({
        type: LOGIN_ERROR,
        error: 'error message'
      });
      const actual = generator.throw(error).value;
      expect(expected).toEqual(actual);
    });
  });
});
