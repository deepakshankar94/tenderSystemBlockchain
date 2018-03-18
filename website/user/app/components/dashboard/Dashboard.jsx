/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: Dashboard.jsx
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * Dashboard component of the application.
 *
 **/

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './dashboard.sass';
import EndOfSimReport from './endOfSimReport';

@CSSModules(styles, { allowMultiple: true })
class Dashboard extends React.Component {

	render() {
		return (
			<div className="dashboard">
				<div>
					Please edit user/app/components/dashboard/Dashboard.jsx to update this Container!
				</div>
				<EndOfSimReport
					{...this.props}
					styles={undefined}
				/>
			</div>
		);
	}
}

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;
