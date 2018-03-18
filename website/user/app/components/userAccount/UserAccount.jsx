/**
 * @author: girish
 * @since: Mon Oct 03 2016 11:19:39 GMT+0530 (IST)
 * @file: UserAccount.jsx
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * UserAccount Component is responsible for displaying user details and logout
 * button of the application
 *
 **/

import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { SkinModule } from 'react-skin';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import UserAccountIcon from 'material-ui/svg-icons/action/account-circle';
import { userAccountIconStyles,
	logoutTextStyles,
	anchorOrigin,
	targetOrigin,
	userAccountIconColor
} from './useraccountMUI';
import styles from './useraccount.sass';


@SkinModule
@CSSModules(styles, { allowMultiple: true })
class UserAccount extends React.Component {

	/**
	 * [onClickLogout logs out the user]
	 */
	onClickLogout = () => {
		window.location.replace(this.props.user.logoutURL);
	}

	render() {
		const {
			getSkinHash
		} = this.props;
		const iconButtonElement = (
			<IconButton style={userAccountIconStyles}>
				<div>
					<UserAccountIcon color={userAccountIconColor} style={userAccountIconStyles} />
				</div>
			</IconButton>
		);


		return (
			<div styleName="useraccount-component" tabIndex="0">
				<IconMenu
					iconButtonElement={iconButtonElement}
					anchorOrigin={anchorOrigin}
					targetOrigin={targetOrigin}
				>
					<MenuItem primaryText={`${getSkinHash('label_hi')} ${this.props.user.name || ''}`} />
					<MenuItem
						primaryText={getSkinHash('label_logout')}
						style={logoutTextStyles}
						onClick={this.onClickLogout}
					/>
				</IconMenu>
			</div>
		);
	}
}

UserAccount.propTypes = {
	user: PropTypes.object.isRequired,
	getSkinHash: PropTypes.func
};
UserAccount.defaultProps = {};

export default UserAccount;
