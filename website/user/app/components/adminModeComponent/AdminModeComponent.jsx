/**
 * @author: dharmik
 * @since: Sun Mar 18 2018 16:50:41 GMT+0530 (India Standard Time)
 * @file: AdminModeComponent.jsx
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * FILE DESCRIPTION
 *
 **/

import React from 'react';
import CSSModules from 'react-css-modules';
import Header from 'components/header';
import ListTendersComponent from 'components/listTendersComponent';

import styles from './adminmodecomponent.sass';

@CSSModules(styles, { allowMultiple: true })
class AdminModeComponent extends React.Component {

	render() {
		return (
			<div styleName="adminmodecomponent-component">
				<Header title="Admin Dashboard" />
				<ListTendersComponent {...this.props} styles={undefined} />
			</div>
		);
	}
}

AdminModeComponent.propTypes = {};
AdminModeComponent.defaultProps = {};

export default AdminModeComponent;
