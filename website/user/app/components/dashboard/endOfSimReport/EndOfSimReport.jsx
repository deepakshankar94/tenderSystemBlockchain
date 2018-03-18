/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:28 GMT+0530 (IST)
 * @file: EndOfSimReport.jsx
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * Displays End of sim report the applications
 *
 **/

import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import { SkinModule } from 'react-skin';
import CSSModules from 'react-css-modules';
import { feedbackUtil } from 'util';
import imageConsts from 'constants/images';
import styles from './endofsimreport.sass';
import {
	bodyStyle,
	errorStyle,
	underlineStyle,
	floatingLabelStyle,
	floatingLabelFocusStyle
} from './endofsimreportMUI';

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

@SkinModule
@CSSModules(styles, { allowMultiple: true })
class EndOfSimReport extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			emailAddress: props.user.emailAddress || '',
			errorText: '',
			validationMessage: '',
			emailClicked: false,
			isEndOfSimReportOpen: false
		};
	}

	/**
	* [onEmailChange updates email address]
	* @param  {Object} event [key change event]
	*/
	onEmailChange = (event) => {
		const emailAddress = event.target.value;
		this.setState({
			emailAddress
		});
		if (emailAddress.match(emailRegex)) {
			this.props.updateEmailAddress(emailAddress);
			this.setState({ errorText: '' });
		} else {
			this.setState({ errorText: this.props.getSkinHash('enter_valid_email') });
		}
	}

	/**
	* [closeEndOfSimReport closes end of sim report]
	*/
	closeEndOfSimReport = () => {
		this.setState({
			isEndOfSimReportOpen: false
		});
	}

	/**
	* [openEndOfSimReport open end of sim report]
	*/
	openEndOfSimReport = () => {
		this.setState({
			isEndOfSimReportOpen: true
		});
	}

	/**
	* [showFeedback display feecback component]
	*/
	showFeedback = () => {
		feedbackUtil.showFeedbackFormWithoutPopup();
	}

	/**
	* [sendEmail send report via email and get email report link]
	*/
	sendEmail = () => {
		if (this.props.user.emailAddress) {
			this.setState({
				emailClicked: true
			});
			this.props.emailUserReport(this.props.user.emailAddress);
			this.setState({
				validationMessage: this.props.getSkinHash('sending_awesomeness')
			});
			setTimeout(() => {
				this.setState({
					validationMessage: this.props.getSkinHash('mail_dispatched')
				});
				setTimeout(() => {
					this.setState({
						validationMessage: '',
						emailClicked: false
					});
				}, 1500);
			}, 2000);
		} else {
			this.setState({ errorText: this.props.getSkinHash('enter_valid_email') });
		}
	}

	/**
	* [generateUserReport fetches user report]
	*/
	generateUserReport = () => {
		if (this.props.user.reportURL) {
			window.open(`${this.props.user.reportURL}`);
		} else if (!this.props.sim.generatingUserReport) {
			this.props.getReportURL();
		}
	}

	/**
	* [returnClassforEmailUserReport returns class name for email
	* report button]
	* @return {String} [class name]
	*/
	returnClassforEmailUserReport = () => {
		if ((this.state.errorText === '') && (this.state.emailClicked === false)) {
			return 'button-style';
		}
		return 'button-style-disabled';
	}

	/**
	* [returnClassforDownloadReportButton returns class name for download
	* report button]
	* @return {String} [class name]
	*/
	returnClassforDownloadReportButton = () => {
		if (this.props.user.reportURL) {
			return 'button-style';
		} else if (!this.props.sim.generatingUserReport) {
			return 'not-started-button-style';
		}
		return 'button-progress-style';
	}

	/**
	* [returnLoading returns loading icon]
	* @return {Object} [loading icon]
	*/
	returnLoading = () => {
		if (this.props.sim.generatingUserReport && !this.props.user.reportURL) {
			return (
				<img
					styleName="loading"
					src={imageConsts.get('IMG_AJAX_LOADING')}
					alt={this.props.getSkinHash('label_loading')}
				/>
			);
		}
		return (
			<div />
		);
	}

	/**
	* [renderDownloadReportString string displayed in download report button]
	* @return {String} [download report button label]
	*/
	renderDownloadReportString = () => {
		if (this.props.user.reportURL) {
			return 'download_report';
		} else if (!this.props.sim.generatingUserReport) {
			return 'generate_report';
		}
		return 'preparing_report';
	}

	/**
	* [renderReportHelpertext helper text when report is ready]
	* @return {String} [helper text]
	*/
	renderReportHelpertext = () => {
		if (this.props.user.reportURL) {
			return this.props.getSkinHash('report_ready');
		}
		return '';
	}

	/**
	* [renderEndOfSimDialog returns end of sim report dialog]
	*/
	renderEndOfSimDialog = () => {
		const {
			getSkinHash,
			sim
		} = this.props;
		return (<Dialog
			bodyStyle={bodyStyle}
			modal={false}
			open={this.state.isEndOfSimReportOpen}
			onRequestClose={this.closeEndOfSimReport}
		>
			<div styleName="header">
				<div styleName="title">{getSkinHash('end_of_sim_report_title')}</div>
				<div styleName="close" tabIndex={0} onClick={this.closeEndOfSimReport}>X</div>
			</div>
			<div styleName="content position-center">
				<div styleName="report-section">
					<TextField
						hintText={getSkinHash('enter_email')}
						floatingLabelText={getSkinHash('email')}
						floatingLabelFixed
						value={this.state.emailAddress}
						errorStyle={errorStyle}
						underlineStyle={underlineStyle}
						errorText={this.state.errorText}
						onChange={this.onEmailChange}
						floatingLabelStyle={floatingLabelStyle}
						floatingLabelFocusStyle={floatingLabelFocusStyle}
					/>
					<div styleName={this.returnClassforEmailUserReport()} onClick={this.sendEmail}>
						<div>{getSkinHash('email_report')}</div>
						<p styleName="progress-text error-text">{this.state.validationMessage}</p>
					</div>
					<div
						styleName={this.returnClassforDownloadReportButton()}
						disabled={sim.generatingUserReport}
						onClick={this.generateUserReport}
					>
						{getSkinHash(this.renderDownloadReportString())}
						{this.returnLoading()}
						<p styleName="progress-text">{this.renderReportHelpertext()}</p>
					</div>
				</div>
				<div styleName="position-center feedback-content">
					<div styleName="button-style" onClick={this.showFeedback}>
						{getSkinHash('show_feedback')}
					</div>
				</div>
			</div>
		</Dialog>);
	}

	render() {
		const {
				getSkinHash
			} = this.props;

		return (
			<div>
				<div>
					<button onClick={this.openEndOfSimReport}>{getSkinHash('view_end_of_sim_report')}</button>
				</div>
				{this.renderEndOfSimDialog()}
			</div>
		);
	}
	}

EndOfSimReport.propTypes = {
	emailUserReport: PropTypes.func.isRequired,
	getReportURL: PropTypes.func.isRequired,
	updateEmailAddress: PropTypes.func.isRequired,
	sim: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
	getSkinHash: PropTypes.func
};
EndOfSimReport.defaultProps = {};

export default EndOfSimReport;
