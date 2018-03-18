/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: app.js
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * App reducer is a high level reducer which combines all the sub reducers using
 * default redux "combineReducers" functionality
 *
 **/

import { combineReducers } from 'redux-immutable';
import user from './user/user';
import skin from './skin/skin';
import users from './users/users';
import vendors from './vendors/vendors';
import tenders from './tenders/tenders';
import storageProviders from './storageProviders/storageProviders';
import miners from './miners/miners';
import departments from './departments/departments';
import governments from './governments/governments';
import authorizedVerifiers from './authorizedVerifiers/authorizedVerifiers';

const app = combineReducers({
	user,
	skin,
	users,
	vendors,
	tenders,
	miners,
	storageProviders,
	departments,
	governments,
	authorizedVerifiers
});

export default app;
