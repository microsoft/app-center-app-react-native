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
import { REQUEST_APPS, RECEIVE_APPS, RECEIVE_APPS_ERROR } from '../../js/actions/types';
import { fetchApps, fetchAppsFlow, watchFetchAppList } from '../../js/sagas/apps';
import { appsAPI } from '../../js/utils/RequestUtil';

describe('Sagas/ apps', () => {

  describe('watchFetchAppList', () => {
    const generator = watchFetchAppList();
    it('should take every fetch app request', () => {
      const expected = takeEvery(REQUEST_APPS, fetchAppsFlow);
      const actual = generator.next().value;
      expect(expected.name).toEqual(actual.name);
    });
  });

  describe('fetchAppsFlow', () => {
    const generator = fetchAppsFlow({ tokenId: '1938077bc136d1b81c65c4d74fc4f593d9c28b02' });
    it('should fork a fetchApps test', () => {
      const expected = fork(fetchApps, { tokenId: '1938077bc136d1b81c65c4d74fc4f593d9c28b02' });
      const actual = generator.next().value;
      expect(expected).toEqual(actual);
    });
  });

  describe('fetchApps', () => {
    const generator = fetchApps({ tokenId: '1938077bc136d1b81c65c4d74fc4f593d9c28b02' });
    it('should call appsAPI', () => {
      const expected = call(appsAPI,
        { tokenId: '1938077bc136d1b81c65c4d74fc4f593d9c28b02' }
      );
      const actual = generator.next().value;
      expect(expected).toEqual(actual);
    });

    it('should handle fetchApps success', () => {
      const getResponse = () => ({ token: 'faketoken' });
      const expected = put({
        type: RECEIVE_APPS,
        response: { token: 'faketoken' }
      });
      const actual = generator.next(getResponse()).value;
      expect(expected).toEqual(actual);
    });

    it('should handle fetchApps error', () => {
      const error = 'error message';
      const expected = put({
        type: RECEIVE_APPS_ERROR,
        error: 'error message'
      });
      const actual = generator.throw(error).value;
      expect(expected).toEqual(actual);
    });
  });
});
