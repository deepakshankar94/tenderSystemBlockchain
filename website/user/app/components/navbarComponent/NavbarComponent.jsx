/*
 * @author: abhi
 * @since: Sat Feb 03 2018 23:33:06 GMT+0530 (IST)
 * @file: NavbarComponent.jsx
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 */

/*
 *
 * FILE DESCRIPTION
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';
import LogoutIcon from 'material-ui/svg-icons/notification/power';
import styles from './navbarcomponent.sass';

@CSSModules(styles, { allowMultiple: true })
class NavbarComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	handleNavigation = (e, value) => {
		if (e) {
			this.props.handleNavigationClick(value);
		}
		this.handleToggle();
	}

	handleToggle = () => this.setState({ open: !this.state.open });

	render() {
		return (
			<div>
				<MenuIcon
					onClick={this.handleToggle}
					style={{
						width: '50px',
						height: '60px',
						cursor: 'pointer',
						backgroundColor: '#009688'
					}}
					color="white"
				/>
				<div>
					<Drawer
						docked={false}
						width={200}
						open={this.state.open}
						onRequestChange={this.handleNavigation}
					>
						<MenuItem primaryText="Tournaments" value="tournaments" onClick={(e) => this.handleNavigation(e, 'tournaments')} />
						<MenuItem primaryText="Menu Item 2" value={false} onClick={(e) => this.handleNavigation(e, 'Menu Item 2')} />
						<div styleName="logout">
							<FlatButton
								label="Logout"
								labelPosition="before"
								fullWidth
								labelStyle={{ color: 'red' }}
								primary
								icon={<LogoutIcon color="red" />}
								onClick={this.props.logoutUser}
							/>
						</div>
					</Drawer>

				</div>
			</div>
		);
	}
}

NavbarComponent.propTypes = {
	handleNavigationClick: PropTypes.func.isRequired,
	logoutUser: PropTypes.func.isRequired
};
NavbarComponent.defaultProps = {};

export default NavbarComponent;
