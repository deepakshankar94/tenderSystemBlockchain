/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: EvaluatorModeContainer.js
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
import EvaluateTenderBase from 'components/evaluateTenderBase';
import { moveToDashboardScreen } from 'actions/init';

class EvaluatorModeContainer extends React.Component {
	render() {
		return (
			<div className="container">
				<EvaluateTenderBase {...this.props} />
			</div>
		);
	}
}

EvaluatorModeContainer.propTypes = {};

EvaluatorModeContainer.defaultProps = {};

const mapStateToProps = (state) => ({ ...(state.toJS()) });

const mapDispatchToProps = (dispatch) => ({
	moveToDashboard: () => {
		dispatch(moveToDashboardScreen());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(EvaluatorModeContainer);
