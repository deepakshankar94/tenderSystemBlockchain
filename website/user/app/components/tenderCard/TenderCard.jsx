/**
 * @author: dharmik
 * @since: Sun Mar 18 2018 16:51:52 GMT+0530 (India Standard Time)
 * @file: TenderCard.jsx
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
import Paper from 'material-ui/Paper';
import AddIcon from 'material-ui/svg-icons/content/add';
import WallpaperIcon from 'material-ui/svg-icons/device/wallpaper';

import styles from './tendercard.sass';

const cardStyle = {
	height: '150px',
	width: '200px',
	minHeight: '150px',
	minWidth: '200px',
	margin: '20px'
};

const addIconStyle = {
	height: '75px',
	width: '75px'
};

@CSSModules(styles, { allowMultiple: true })
class TenderCard extends React.Component {

	handleCardClick = () => {
		let routeToRedirect = 'tenders/';
		if (this.props.id === -1) {
			routeToRedirect += 'create';
		} else {
			routeToRedirect += this.props.id;
		}
		this.props.updateRouteOnTenderCardClick(routeToRedirect);
	}

	renderIcon = () => {
		if (this.props.id === -1) {
			return (
				<div className="display-flex-center" styleName="icon-container">
					<AddIcon style={addIconStyle} />
				</div>
			);
		}
		return (
			<div className="display-flex-center" styleName="icon-container">
				<WallpaperIcon style={addIconStyle} />
			</div>
		);
	}

	renderCardContent = () => (
		<div className="display-flex-center" styleName="tendercard-component">
			{this.renderIcon()}
			<span styleName="tender-name">
				{this.props.name}
			</span>
		</div>
	)

	render() {
		return (
			<Paper
				style={cardStyle}
				zDepth={2}
				onClick={this.handleCardClick}
			>
				{this.renderCardContent()}
			</Paper>
		);
	}
}

TenderCard.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	updateRouteOnTenderCardClick: PropTypes.func.isRequired
};
TenderCard.defaultProps = {};

export default TenderCard;
