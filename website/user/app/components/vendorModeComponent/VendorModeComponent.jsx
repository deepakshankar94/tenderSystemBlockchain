/**
 * @author: dharmik
 * @since: Mon Mar 19 2018 15:57:16 GMT+0530 (India Standard Time)
 * @file: VendorModeComponent.jsx
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
import ListTendersComponent from 'components/listTendersComponent';

import styles from './vendormodecomponent.sass';

@CSSModules(styles, { allowMultiple: true })
class VendorModeComponent extends React.Component {

	render() {
		return (
			<div styleName="vendormodecomponent-component">
				<ListTendersComponent {...this.props} styles={undefined} />
			</div>
		);
	}
}

VendorModeComponent.propTypes = {};
VendorModeComponent.defaultProps = {};

export default VendorModeComponent;
