/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: updateRoute.js
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * update route helps to update the route of the application
 *
 **/

import { hashHistory } from 'react-router';

/**
 * [update route of the application]
 * @param  {String} route [new route of the application]
 */
const updateRoute = (route) => {
	hashHistory.push(route);
};

export default updateRoute;
