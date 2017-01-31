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

const HOST = "https://api.mobile.azure.com";

export const TOKENID = "2eb6d0e2250779ad71acde8f383158b48aa0b4b6";

export const request = (url, method, body) => {
	let isOk;
	return new Promise((resolve, reject) => {
		fetch(HOST + url, {
			method,
			headers:{
				'Accept': 'application/json',
				'X-API-Token': TOKENID
			},
			body
		})
		.then((response) => {
			if(response.ok){
				isOk = true;
			}else{
				isOk = false;
			}
			return response.json();
		})
		.then((responseData) => {
			if(isOk){
				resolve(responseData);
			} else {
				reject(responseData);
			}
		})
		.catch((error) => {
			reject(error);
		});
	}); 
};