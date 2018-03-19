/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: PublicModeContainer.js
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * Introduction container is responsible for displaying Introduction pages and
 * displayed on intro route of the application
 *
 **/

import React from 'react';
import { connect } from 'react-redux';
import LandingPageComponent from 'components/landingPageComponent';
import { moveToDashboardScreen } from 'actions/init';

class PublicModeContainer extends React.Component {
	render() {
		return (
			<div className="container">
				<LandingPageComponent {...this.props} />
			</div>
		);
	}
}

PublicModeContainer.propTypes = {};

PublicModeContainer.defaultProps = {};

const mapStateToProps = (state) => ({ ...(state.toJS()) });

const mapDispatchToProps = (dispatch) => ({
	moveToDashboard: () => {
		dispatch(moveToDashboardScreen());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicModeContainer);
