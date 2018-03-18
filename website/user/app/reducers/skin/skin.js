/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: skin.js
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * skin reducer is responsible for strings skin related actions
 *
 **/

import Immutable from 'immutable';
import actionConsts from 'constants/actions';

// initialState of the skin reducer
const initialState = Immutable.fromJS({});

const skin = (state = initialState, action = {}) => {
	if (action.type === actionConsts.get('RECEIVE_INIT_DATA')) {
		// on receive init data
		return state.merge(Immutable.fromJS(action.payload.skin));
	}
	// return default state
	return state;
};

export default skin;
