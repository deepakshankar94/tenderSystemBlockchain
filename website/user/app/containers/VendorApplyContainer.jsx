/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: VendorApplyContainer.js
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
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import Loader from 'components/loader';
import { moveToDashboardScreen } from 'actions/init';
import { applyForTender } from 'actions/generic';
import VendorApplyComponent from 'components/vendorApplyComponent';

class VendorApplyContainer extends React.Component {
	render() {
		if (_.isEmpty(this.props.tenders)) {
			return <Loader />;
		}
		const tenders = Object.values(this.props.tenders);
		const currentTenderId = this.props.routeParams.tender_id;
		const tender = tenders.filter((t) => (
			t.id === currentTenderId
		))[0];
		return (
			<div className="container">
				<VendorApplyComponent {...this.props} tender={tender} styles={undefined} />
			</div>
		);
	}
}

VendorApplyContainer.propTypes = {
	routeParams: PropTypes.object,
	tenders: PropTypes.object
};

VendorApplyContainer.defaultProps = {};

const mapStateToProps = (state) => ({ ...(state.toJS()) });

const mapDispatchToProps = (dispatch) => ({
	moveToDashboard: () => {
		dispatch(moveToDashboardScreen());
	},
	applyForTender: (vendorId, tenderId, data) => {
		dispatch(applyForTender(vendorId, tenderId, data));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(VendorApplyContainer);
