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

const tenders = (state = initialState, action = {}) => {
	const stateCopy = JSON.parse(JSON.stringify(state));

	switch (action.type) {
		case 'FETCH_TENDERS_STATE':
			window.console.log('update tenders state');
			window.console.log(action.payload);
			return action.payload;
		case 'UPDATE_TENDERS_STATE':
			window.console.log('update tenders state');
			window.console.log(action.payload);
			return action.payload;
		case 'ADD_OR_UPDATE_TENDER':
			stateCopy[action.payload.key] = action.payload.value;
			return stateCopy;
		case 'DELETE_TENDER':
			delete stateCopy[action.payload.key];
			return stateCopy;
		default:
			// return default state
			return state;
	}
};

export default tenders;
