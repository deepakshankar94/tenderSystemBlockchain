/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: AppProvider.js
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * App Provider file is where store and router are connected for the application
 * Router helps keeps UI sync with the URL
 * Store acts a model object of the application
 *
 **/

import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from 'router/AppRouter';
import store from 'store/store';

const AppProvider = () => (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

export default AppProvider;
