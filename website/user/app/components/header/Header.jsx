/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: Header.jsx
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * Header component of the application
 *
 **/

import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import UserAccount from 'components/userAccount';
import imageConsts from 'constants/images';
import styles from './header.sass';

@CSSModules(styles, { allowMultiple: true })
class Header extends React.Component {

	render() {
		return (
			<div styleName="header-component">
				<img src={imageConsts.get('IMG_KNOLSKAPE_LOGO')} alt="KNOLSKAPE" styleName="sim-logo" />
				<UserAccount user={this.props.user} />
			</div>
		);
	}
}

Header.propTypes = {
	user: PropTypes.object.isRequired
};
Header.defaultProps = {};

export default Header;
