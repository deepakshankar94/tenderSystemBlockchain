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
import { fetchTenders, selectVendorForTender } from 'actions/tenders';
import { applyForTender } from 'actions/generic';
import { fetchUsers } from 'actions/users';
import { fetchVendors } from 'actions/vendors';
import { fetchBlockChain } from 'actions/blockchain';
import { initFirebaseDB } from 'util/firebase';

initFirebaseDB();
const onEnterDefaultTenderAdminRoute = (routeInfo) => {
	console.log(routeInfo);
	Promise.all([
		fetchVendors(store.dispatch),
		fetchUsers(store.dispatch),
		fetchTenders(store.dispatch)
	])
    .then(() => {
	// store.dispatch(addTender({
	// 	name: 'Test tender 1',
	// 	description: 'This is test tender and here you can give the details of the tender.',
	// 	departmentId: 1,
	// 	publicKey: 'asfdsafdsafasdfsadfsadfsadcsddscdscsdf',
	// 	criteria: {
	// 		0: {
	// 			id: 0,
	// 			name: 'Budget',
	// 			minOrMax: 1,
	// 			minVal: 0,
	// 			maxValue: 1000,
	// 			type: 'number'
	// 		},
	// 		1: {
	// 			id: 1,
	// 			name: 'Completion date',
	// 			minOrMax: 0,
	// 			minVal: 1553020200,
	// 			maxValue: 1560969000,
	// 			type: 'number'
	// 		}
	// 	}
	// }));
	// store.dispatch(applyForTender('-L7ybmdmONVTpZtpHfbg', 1, {
	// 	0: 500,
	// 	1: 1553020100
	// }));
	// store.dispatch(selectVendorForTender('-L7ybmdmONVTpZtpHfbg', 1));
});
};
const onEnterDefaultTenderUserRoute = (routeInfo) => {
	console.log(routeInfo);
	store.dispatch(fetchTenders());
};
const onEnterDefaultTenderPublicRoute = (routeInfo) => {
	console.log(routeInfo);
	fetchBlockChain(store.dispatch);
};
const onEnterDefaultTenderCreateRoute = (routeInfo) => {
	console.log(routeInfo);
	Promise.all([
		fetchVendors(store.dispatch),
		fetchUsers(store.dispatch),
		fetchTenders(store.dispatch)
	]);
};

const onEnterDefaultTenderEvaluatorRoute = (routeInfo) => {
	console.log('route info is');
	console.log(routeInfo.params.id);
	Promise.all([
		fetchVendors(store.dispatch),
		fetchUsers(store.dispatch),
		fetchTenders(store.dispatch)
	]).then(() => {
		store.dispatch(applyForTender(routeInfo.params.id, 0, {
			0: 200,
			1: 1521484200700
		}));
		store.dispatch(applyForTender(routeInfo.params.id, 1, {
			0: 700,
			1: 1521484200500
		}));
		store.dispatch(selectVendorForTender(routeInfo.params.id, 0));
	});
};

const onEnterDefaultVendorRoute = (routeInfo) => {
	console.log(routeInfo);
	Promise.all([
		fetchVendors(store.dispatch),
		fetchUsers(store.dispatch),
		fetchTenders(store.dispatch)
	]);
};

const onEnterDefaultVendorApplyRoute = (routeInfo) => {
	console.log(routeInfo);
	Promise.all([
		fetchVendors(store.dispatch),
		fetchUsers(store.dispatch),
		fetchTenders(store.dispatch)
	]);
};

export {
	onEnterDefaultTenderAdminRoute,
	onEnterDefaultTenderUserRoute,
	onEnterDefaultTenderPublicRoute,
	onEnterDefaultTenderCreateRoute,
	onEnterDefaultVendorRoute,
	onEnterDefaultVendorApplyRoute,
	onEnterDefaultTenderEvaluatorRoute,
};
