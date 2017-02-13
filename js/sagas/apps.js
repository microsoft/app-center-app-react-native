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

import {put, take, call, fork} from 'redux-saga/effects';

import * as types from '../actions/types';
import {fetchAppList, receiveAppList} from '../actions/apps';
import {toastShort} from '../utils/ToastUtil';
import {request} from '../utils/RequestUtil';

const get_apps   = "/v0.1/apps";

export function* requestAppList(isRefreshing, loading, tokenId, isLoadMore, page){
	try{
		yield put(fetchAppList(isRefreshing, loading, isLoadMore));
		const appList = yield call(request, get_apps, 'get');
		yield put(receiveAppList(appList,tokenId));
	}catch(error){
		yield put(receiveAppList([], tokenId));
		toastShort('Network Error, Please Retry!!!');
	}
}

export function* watchRequestAppList(){
	while(true){
		const {
	      isRefreshing,
	      loading,
	      tokenId,
	      isLoadMore,
	      page
    	} = yield take(types.REQUEST_APP_LIST);
    	yield fork(requestAppList, isRefreshing, loading, tokenId, isLoadMore, page);
	}
}