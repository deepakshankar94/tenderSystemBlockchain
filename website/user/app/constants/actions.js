/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: actions.js
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * Exports action related constants
 *
 **/

import Immutable from 'immutable';

const actions = Immutable.Map({
	RECEIVE_INIT_DATA: 'RECEIVE_INIT_DATA',
	RECEIVE_REPORT_URL: 'RECEIVE_REPORT_URL',
	ERROR: 'ERROR',
	EMPTY_ERROR: 'EMPTY_ERROR',
	UPDATE_GENERATING_USER_REPORT_FLAG: 'UPDATE_GENERATING_USER_REPORT_FLAG',
	UPDATE_EMAIL_ADDRESS: 'UPDATE_EMAIL_ADDRESS'
});

export default actions;
