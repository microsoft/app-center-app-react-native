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

// GET /v0.1/api_tokens
export const LOGGED_IN  = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';

// GET /v0.1/apps
export const REQUEST_APP_LIST = 'REQUEST_APP_LIST';
export const FETCH_APP_LIST = 'FETCH_APP_LIST';
export const RECEIVE_APP_LIST = 'RECEIVE_APP_LIST';

// GET /v0.1/user
export const LOADED_USER = 'LOADED_USER';

// GET /v0.1/apps/{owner_name}/{app_name}

// GET /v0.1/apps/{owner_name}/{app_name}/users

// GET /v0.1/apps/{owner_name}/{app_name}/testers

/*
 *
 * build action types
 *
 */

// GET /v0.1/apps/{owner_name}/{app_name}/distribution_groups

// GET /v0.1/apps/{owner_name}/{app_name}/distribution_groups/{distribution_group_name}

// GET /v0.1/apps/{owner_name}/{app_name}/distribution_groups/{distribution_group_name}/members


/*
 *
 * distribute action types
 *
 */

/*
 *
 * crash action types
 *
 */

/*
 *
 * analytics action types
 *
 */
