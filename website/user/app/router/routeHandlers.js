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
import { fetchTenders, subscribeForTenders } from 'actions/tenders';
import { fetchUsers, subscribeForUsers } from 'actions/users';
// import { initializeFirebase } from 'util/firebase';

const onEnterDefaultTenderAdminRoute = (routeInfo) => {
	console.log(routeInfo);
	// initializeFirebase();
	store.dispatch(fetchTenders());
	store.dispatch(subscribeForTenders());
	store.dispatch(fetchUsers());
	store.dispatch(subscribeForUsers());
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
