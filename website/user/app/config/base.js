/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: base.js
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * Settings configured here will be merged into the final config object.
 *
 **/

import Immutable from 'immutable';

const base = Immutable.fromJS({
	baseURL: '../../',
	firebase: {
		apiKey: 'AIzaSyA5tUpUL4kEY00lqNxflllyjD8acAotzqc',
		authDomain: 'tender-management-app.firebaseapp.com',
		databaseURL: 'https://tender-management-app.firebaseio.com',
		projectId: 'tender-management-app',
		storageBucket: '',
		messagingSenderId: '488105138922'
	},
});

export default base;
