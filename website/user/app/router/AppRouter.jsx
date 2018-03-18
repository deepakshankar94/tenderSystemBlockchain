/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: AppRouter.jsx
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/
/**
 *
 *  react router of the application
 *
 **/
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Loading from 'components/commonComponents/loading';
import NotFound from 'components/notFound';
import AdminModeContainer from 'containers/AdminModeContainer';
import UserModeContainer from 'containers/UserModeContainer';
import { onEnterDefaultTenderAdminRoute, onEnterDefaultTenderUserRoute, onEnterDefaultTenderPublicRoute } from './routeHandlers';
/**
 * [appRoutes application routes]
 * default route displays loading page
 * intro route displays introduction content
 * dashboard route displays dashboard content
 * any other route apart from above displays NotFound page
 */
const appRoutes = (
	<Route path="/">
		<IndexRoute component={Loading} onEnter={onEnterDefaultTenderPublicRoute} />
		<Route path="admin">
			<Route path=":id" component={AdminModeContainer} onEnter={onEnterDefaultTenderAdminRoute} />
		</Route>
		<Route path="user">
			<Route path=":id" component={UserModeContainer} onEnter={onEnterDefaultTenderUserRoute} />
		</Route>
		<Route path="*" component={NotFound} />
	</Route>
);
const AppRouter = () => (
	<Router history={hashHistory}>
		{appRoutes}
	</Router>
);
export default AppRouter;
