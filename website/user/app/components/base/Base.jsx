/* eslint react/no-unused-prop-types: 0 */

/**
 *
 * Base component of the application
 *
 * */

import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import NotificationSystem from 'react-notification-system';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import LoginContainer from 'containers/LoginContainer';
import styles from './base.sass';

@CSSModules(styles, { allowMultiple: true })
class Base extends React.Component {

	/**
	 * [componentWillReceiveProps displays notifications if error object is not null]
	 * @param  {[object]} nextProps [updated props after change of the store]
	 */
	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
	}

	initialNotifRef = null

	checkUserAuthentication = () => this.renderApp();

	// checkUserAuthentication = () => {
	// 	if (!this.props.user.isUserLoggedIn) {
	// 		return <LoginContainer />;
	// 	}
	//
	// 	return this.renderApp();
	// }

	renderApp = () => (
		<div styleName="main">
			{/* <NavbarComponent {...this.props} styles={undefined} /> */}
			{this.props.children}
			<NotificationSystem ref={(ref) => { this.initialNotifRef = ref; }} />
		</div>
	)

	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<div styleName="base-component">
					{this.renderApp()}
				</div>
			</MuiThemeProvider>
		);
	}
}

Base.propTypes = {
	children: PropTypes.object.isRequired,
};
Base.defaultProps = {
};

export default Base;
