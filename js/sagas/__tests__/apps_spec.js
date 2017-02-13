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

import { put, call } from 'redux-saga/effects';
import { requestAppList } from '../apps';
import { request, TOKENID } from '../../utils/RequestUtil';
import { fetchAppList, receiveAppList } from '../../actions/apps';

/* global expect */
describe('apps saga tests', () => {
	const {
		isRefreshing,
		loading,
		tokenId,
		isLoadMore,
		page
	} = {
		isRefreshing: false,
		loading: false,
		tokenId: request.TOKENID,
		isLoadMore: false,
		page: 1	
	};
	const generator  = requestAppList(
		isRefreshing,
		loading,
		tokenId,
		isLoadMore,
		page
	);
	const mockArticleList = {
		showapi_res_body: {
			pagebean: {
				contentlist: [
			],
		   },
		},
	};
	const step = input => generator.next(input).value;

	it(`should put(fetchAppList(${isRefreshing}, ${loading}, ${isLoadMore}))`, () => {
    	const next = step();
    	// console.log(next);
    	const tt = put(fetchAppList(isRefreshing, loading, isLoadMore));
    	// console.log(tt);
    	// expect(next).toEqual();
  	});

	it('just for fun', () => {
		const tt = 1;
		expect(tt).toEqual(1);		
	});
});