/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: error.js
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * Error contains the actions for handling the error occured the simulation
 * before, during or after the fetching the data. (Parsing, Page not found,
 * Server side and data missing errors are handled)
 *
 **/

import actionConsts from 'constants/actions';

/**
 * parseErrorAction action creater for parse error
 * @param  {Object} parseError parse error object
 * @return {Object}      Action object for parse error
 */
const parseErrorAction = (parseError) => ({
	type: actionConsts.get('ERROR'),
	error: {
		type: 'ERROR',
		message: parseError.message,
		errorObject: parseError
	}
});

/**
 * parseErrorHandlerThunk dispatch parse error action
 * @param  {Function} dispatch   dispatch function
 * @param  {Object} parseError parse error object
 */
const parseErrorHandlerThunk = (dispatch, parseError) => {
	dispatch(parseErrorAction(parseError));
};

/**
 * parseErrorHandler handler for parse error
 * @param  {Object} parseError parse error object
 */
const parseErrorHandler = (parseError) =>
	(dispatch) => parseErrorHandlerThunk(dispatch, parseError);

/**
 * networkErrorAction action creater for network error
 * @param  {Object} networkError network error object
 * @return {Object}            Action object for network error
 */
const networkErrorAction = (networkError) => ({
	type: actionConsts.get('ERROR'),
	error: {
		type: 'ERROR',
		message: networkError.message,
		errorObject: networkError
	}
});

/**
 * networkErrorHandlerThunk dispatch network error action
 * @param  {Function} dispatch   dispatch function
 * @param  {Object} networkError network error object
 */
const networkErrorHandlerThunk = (dispatch, networkError) => {
	dispatch(networkErrorAction(networkError));
};

/**
 * networkErrorHandler handler for network error
 * @param  {Object} networkError network error object
 */
const networkErrorHandler = (networkError) =>
	(dispatch) => networkErrorHandlerThunk(dispatch, networkError);

/**
 * backendErrorAction action creater for backend error
 * @param  {Object} backendError backend error object
 * @return {Object}            Action object for backend error
 */
const backendErrorAction = (backendError) => ({
	type: actionConsts.get('ERROR'),
	error: {
		type: 'ERROR',
		message: backendError.statusText,
		errorObject: backendError
	}
});

/**
 * backendErrorHandlerThunk dispatch backend error action
 * @param  {Function} dispatch   dispatch function
 * @param  {Object} backendError backend error object
 */
const backendErrorHandlerThunk = (dispatch, backendError) => {
	dispatch(backendErrorAction(backendError));
};

/**
 * backendErrorHandler handler for backend error
 * @param  {Object} backendError backend error object
 */
const backendErrorHandler = (backendError) =>
	(dispatch) => backendErrorHandlerThunk(dispatch, backendError);

/**
 * frontendErrorAction action creater for frontend error
 * @param  {Object} frontendError frontend error object
 * @return {Object}            Action object for frontend error
 */
const frontendErrorAction = (frontendError) => ({
	type: actionConsts.get('ERROR'),
	error: {
		type: 'ERROR',
		message: frontendError.message,
		errorObject: frontendError
	}
});

/**
 * clearErrorAction action creater to clear error
 * @return {Object}  Action object to clear error
 */
const clearErrorAction = () => ({
	type: actionConsts.get('EMPTY_ERROR')
});

export {
	parseErrorHandler,
	networkErrorHandler,
	backendErrorHandler,
	frontendErrorAction,
	clearErrorAction
};
