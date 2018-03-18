/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: routeHandler.js
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * FILE DESCRIPTION
 *
 **/

/**
 * enter handler for / or default route
 */
import store from 'store/store';
import { fetchTenders } from 'actions/tenders';
import { fetchUsers } from 'actions/users';
import { initFirebaseDB } from 'util/firebase';

const onEnterDefaultTenderAdminRoute = (routeInfo) => {
	console.log(routeInfo);
	initFirebaseDB();
	store.dispatch(fetchTenders());
	store.dispatch(fetchUsers());
};

const onEnterDefaultTenderUserRoute = (routeInfo) => {
	console.log(routeInfo);
	store.dispatch(fetchTenders());
};

const onEnterDefaultTenderPublicRoute = (routeInfo) => {
	console.log(routeInfo);
	store.dispatch(fetchTenders());
};

export {
	onEnterDefaultTenderAdminRoute,
	onEnterDefaultTenderUserRoute,
	onEnterDefaultTenderPublicRoute
};
