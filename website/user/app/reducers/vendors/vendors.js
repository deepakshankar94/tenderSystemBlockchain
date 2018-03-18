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

const vendors = (state = initialState, action = {}) => {

	const stateCopy = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case 'FETCH_VENDORS_STATE':
			window.console.log('update vendors state');
			window.console.log(action.payload);
			return action.payload;
		case 'UPDATE_VENDORS_STATE':
			window.console.log('update vendors state');
			window.console.log(action.payload);
			return action.payload;
		case 'APPLY_FOR_TENDER':
			console.log('state of vendors is');
			console.log(state);
			if (!Object.prototype.hasOwnProperty.call(stateCopy, action.payload.userId))	{
				stateCopy[action.payload.userId] = {};
			}
			if (!Object.prototype.hasOwnProperty.call(stateCopy[action.payload.userId], 'tenders'))	{
				stateCopy[action.payload.userId].tenders = {};
			}
			console.log('after setting userid');
			console.log(stateCopy);
			stateCopy[action.payload.userId].tenders[action.payload.tenderId] = action.payload;
			console.log('done adding tender into the tenders');
			return stateCopy;
		default:
			// return default state
			return state;
	}
};

export default vendors;
