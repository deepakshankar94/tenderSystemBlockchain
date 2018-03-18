/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: Introduction.jsx
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * Introduction component of the application
 *
 **/

import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './introduction.sass';

@CSSModules(styles, { allowMultiple: true })
class Introduction extends React.Component {

	render() {
		const {
			moveToDashboard
		} = this.props;

		return (
			<div styleName="introduction">
				<div>
					Please edit user/app/components/introduction/Introduction.jsx to update this Component!
				</div>
				<div>
					<button onClick={moveToDashboard}>Dashboard</button>
				</div>
			</div>
		);
	}
}

Introduction.propTypes = {
	moveToDashboard: PropTypes.func.isRequired
};
Introduction.defaultProps = {};

export default Introduction;
