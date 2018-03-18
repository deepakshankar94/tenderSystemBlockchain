/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: init.js
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * Init contains the actions for fetching initial data once the application
 * loads
 *
 **/

import { netpack, updateRoute } from 'util';
import urlConsts from 'constants/urls';
import actionConsts from 'constants/actions';
import { frontendErrorAction } from './error';

/**
 * [receiveInitData description]
 * @param  {Object} appInitData [app initial data]
 * @return {Object}             [action object to update initial data]
 */
const receiveInitData = (appInitData) => ({
	type: actionConsts.get('RECEIVE_INIT_DATA'),
	payload: appInitData
});

/**
 * [fetchAppBaseDataThunk redux thunk to fetch app initial data]
 */
const fetchAppBaseDataThunk = (dispatch, getState) => {
	console.log(getState());
	netpack(urlConsts.get('API_INIT'))
		.get()
		.then((response) => {
			dispatch(receiveInitData(response));
		})
		.then(() => {
			updateRoute('/intro');
		})
		.catch((frontendError) => {
			dispatch(frontendErrorAction(frontendError));
		});
};

/**
 * [fetchAppBaseData fetches app initial data]
 */
const fetchAppBaseData = () => fetchAppBaseDataThunk;

/**
 * [moveToDashboardScreenThunk redux thunk move to dashboard by updating route]
 */
const moveToDashboardScreenThunk = () => {
	updateRoute('/dashboard');
};

/**
 * [moveToDashboardScreen moves to dashboard by updating route]
 */
const moveToDashboardScreen = () => moveToDashboardScreenThunk;

export {
	fetchAppBaseData,
	moveToDashboardScreen
};
