/**
 * @author: dharmik
 * @since: Sun Mar 18 2018 21:43:44 GMT+0530 (India Standard Time)
 * @file: TenderComponent.jsx
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
import styles from './tendercomponent.sass';

@CSSModules(styles, { allowMultiple: true })
class TenderComponent extends React.Component {

	render() {
		return (
			<div styleName="tendercomponent-component">
			Please edit user\app\components\tenderComponent\TenderComponent.jsx
			to update this component!
			</div>
		);
	}
}

TenderComponent.propTypes = {};
TenderComponent.defaultProps = {};

export default TenderComponent;
