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

import login from '../login';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../../actions/types';

describe('Reducers/ login', () => {

  function getInitState() {
    return {
      status: 'init'
    };
  }

  let state = {};
  beforeEach(() => {
    state = getInitState();      
  });

  it('should handle initial state', () => {
    expect(
        login(state, {})
     ).toEqual(
         { status: 'init' }
     );
  });

  it('should handle request login', () => {
    expect(
          login(state, {
            type: LOGIN_REQUEST
          })
      ).toEqual({
        status: 'loading'
      });
  });

  it('should handle login success', () => {
    expect(login(state, {
      type: LOGIN_SUCCESS,
      response: {
        username: 'denny',
        token: '12314'
      }
    })).toEqual({
      status: 'logined', 
      username: 'denny',
      token: '12314'
    });
  });

  it('should handle login error', () => {
    expect(login(state, {
      type: LOGIN_ERROR,
      error: 'error message'
    })).toEqual({
      status: 'error',
      error: 'error message'
    });
  });
});
