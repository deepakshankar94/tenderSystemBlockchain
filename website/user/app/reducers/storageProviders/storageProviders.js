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

const storageProviders = (state = initialState, action = {}) => {

	switch (action.type) {
		case 'FETCH_STORAGE_PROVIDERS_STATE':
			window.console.log('update storageProviders state');
			window.console.log(action.payload);
			return action.payload;
		case 'UPDATE_STORAGE_PROVIDERS_STATE':
			window.console.log('update storageProviders state');
			window.console.log(action.payload);
			return action.payload;
		default:
			// return default state
			return state;
	}
};

export default storageProviders;
