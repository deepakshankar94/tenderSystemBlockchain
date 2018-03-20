/**
 * @author: dharmik
 * @since: Tue Mar 20 2018 01:23:01 GMT+0530 (IST)
 * @file: EvaluateTenderBase.jsx
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
import styles from './evaluatetenderbase.sass';

@CSSModules(styles, { allowMultiple: true })
class EvaluateTenderBase extends React.Component {

	render() {
		return (
			<div styleName="evaluatetenderbase-component">
				This is the evaluate tender page.
			</div>
		);
	}
}

EvaluateTenderBase.propTypes = {};
EvaluateTenderBase.defaultProps = {};

export default EvaluateTenderBase;
