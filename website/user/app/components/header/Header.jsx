/**
 * @author: dharmik
 * @since: Sun Mar 18 2018 16:49:01 GMT+0530 (India Standard Time)
 * @file: Header.jsx
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
import PropTypes from 'prop-types';
import styles from './header.sass';

@CSSModules(styles, { allowMultiple: true })
class Header extends React.Component {

	render() {
		return (
			<div styleName="header-component">
				{this.props.title}
			</div>
		);
	}
}

Header.propTypes = {
	title: PropTypes.string
};
Header.defaultProps = {};

export default Header;
