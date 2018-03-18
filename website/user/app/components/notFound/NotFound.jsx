/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: NotFound.jsx
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * NotFound component of the application used to display unknown pages requested
 * by the user
 *
 **/

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './notfound.sass';

@CSSModules(styles, { allowMultiple: true })
class NotFound extends React.Component {

	render() {
		return (
			<div styleName="notfound-component">
				<p>Page not found</p>
			</div>
		);
	}
}

NotFound.propTypes = {};
NotFound.defaultProps = {};

export default NotFound;
