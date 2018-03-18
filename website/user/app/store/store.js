/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: store.js
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * Store - Store is the single source of the data in Redux applications
 *
 **/

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from 'reducers/app';
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * createStore creates store from appReducer
 */
export default createStore(appReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
