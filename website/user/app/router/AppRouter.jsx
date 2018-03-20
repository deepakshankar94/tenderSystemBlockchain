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
import BaseContainer from 'containers/BaseContainer';
import Loading from 'components/commonComponents/loading';
import NotFound from 'components/notFound';
import AdminModeContainer from 'containers/AdminModeContainer';
import UserModeContainer from 'containers/UserModeContainer';
import PublicModeContainer from 'containers/PublicModeContainer';
import EvaluatorModeContainer from 'containers/EvaluatorModeContainer';
import TenderContainer from 'containers/TenderContainer';
import TenderCreateContainer from 'containers/TenderCreateContainer';
import VendorContainer from 'containers/VendorContainer';
import VendorApplyContainer from 'containers/VendorApplyContainer';
import {
	onEnterDefaultTenderAdminRoute,
	onEnterDefaultTenderUserRoute,
	onEnterDefaultTenderPublicRoute,
	onEnterDefaultTenderCreateRoute,
	onEnterDefaultVendorRoute,
	onEnterDefaultVendorApplyRoute,
	onEnterDefaultTenderEvaluatorRoute
} from './routeHandlers';
/**
 * [appRoutes application routes]
 * default route displays loading page
 * intro route displays introduction content
 * dashboard route displays dashboard content
 * any other route apart from above displays NotFound page
 */
const appRoutes = (
	<Route path="/" component={BaseContainer}>
		<IndexRoute component={Loading} onEnter={onEnterDefaultTenderPublicRoute} />
		<Route path="admin">
			<Route path=":id/dashboard" component={AdminModeContainer} onEnter={onEnterDefaultTenderAdminRoute} />
			<Route path=":id/tenders">
				<Route path="create" component={TenderCreateContainer} onEnter={onEnterDefaultTenderCreateRoute} />
				<Route path=":id" component={TenderContainer} />
			</Route>
		</Route>
		<Route path="user">
			<Route path=":id" component={UserModeContainer} onEnter={onEnterDefaultTenderUserRoute} />
		</Route>
		<Route path="tenders">
			<Route path=":id">
				<Route path="evaluate" component={EvaluatorModeContainer} onEnter={onEnterDefaultTenderEvaluatorRoute} />
			</Route>
		</Route>
		<Route path="public" component={PublicModeContainer} onEnter={onEnterDefaultTenderPublicRoute} />
		<Route path="vendors">
			<Route path=":id/dashboard" component={VendorContainer} onEnter={onEnterDefaultVendorRoute} />
			<Route path=":id/tenders/:tender_id/apply" component={VendorApplyContainer} onEnter={onEnterDefaultVendorApplyRoute} />
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
