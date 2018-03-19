/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: BaseContainer.js
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * base container is rendered on initial load of application and mounted only
 * once displayed on every route of the application and all other containers are
 * children of this base container
 *
 **/

import React from 'react';
import { connect } from 'react-redux';
import Base from 'components/base';
import 'styles/app.sass';
import { fetchAppBaseData } from 'actions/init';
import { clearErrorAction } from 'actions/error';

class BaseContainer extends React.Component {

	render() {
		return (
			<Base {...this.props} />
		);
	}
}

BaseContainer.propTypes = {};

BaseContainer.defaultProps = {};

const mapStateToProps = (state) => ({ ...(state.toJS()) });

const mapDispatchToProps = (dispatch) => ({
	fetchAppBase() {
		dispatch(fetchAppBaseData());
	},

	clearError() {
		dispatch(clearErrorAction());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(BaseContainer);
