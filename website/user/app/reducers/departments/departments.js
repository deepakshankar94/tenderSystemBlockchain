/**
 * @author: abhinav-jain
 * @since: Mon Jan 29 2018 23:17:18 GMT+0530 (IST)
 * @file: user.js
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 * */

/**
 *
 * user reducer is responsible for user related actions
 *
 * */

import Immutable from 'immutable';

// initialState of the user reducer
const initialState = Immutable.fromJS({
});

const departments = (state = initialState, action = {}) => {

	switch (action.type) {
		case 'FETCH_DEPARTMENTS_STATE':
			window.console.log('update departments state');
			window.console.log(action.payload);
			return action.payload;
		case 'UPDATE_DEPARTMENTS_STATE':
			window.console.log('update departments state');
			window.console.log(action.payload);
			return action.payload;
		default:
			// return default state
			return state;
	}
};

export default departments;
