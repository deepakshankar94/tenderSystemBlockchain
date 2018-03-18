/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: Footer.jsx
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * Footer component of the application
 *
 **/

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './footer.sass';

@CSSModules(styles, { allowMultiple: true })
class Footer extends React.Component {

	render() {
		return (
			<div styleName="footer-component">
				<span>Copyright ©  KNOLSKAPE Solutions Pvt. Ltd.</span>
			</div>
		);
	}
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
