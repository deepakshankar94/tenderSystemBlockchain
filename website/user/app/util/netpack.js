/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: ajax.js
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
*
* ajax is helper to perform fetch request
* Purpose of having it as helper is
* 1. Fetch isn't supported in all browers so we need to use polyfill
* 2. Single place to handle generic errors like network issues
*
**/

import { parseErrorHandler, backendErrorHandler, networkErrorHandler } from 'actions/error';
import store from 'store/store';
import Netpack from 'netpack';

const NetpackInstance = new Netpack(
	store.dispatch,
	{ parseErrorHandler, backendErrorHandler, networkErrorHandler }
);

export default NetpackInstance.ajax;
