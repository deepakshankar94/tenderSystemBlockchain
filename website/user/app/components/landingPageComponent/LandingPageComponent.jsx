/**
 * @author: dharmik
 * @since: Mon Mar 19 2018 16:00:11 GMT+0530 (IST)
 * @file: LandingPageComponent.jsx
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * FILE DESCRIPTION
 *
 **/

import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Particles from 'particlesjs';
import moment from 'moment';
import * as _ from 'lodash';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import styles from './landingpagecomponent.sass';


@CSSModules(styles, { allowMultiple: true })
class LandingPageComponent extends React.Component {

	componentWillMount() {

	}

	componentDidMount() {
		Particles.init({
			selector: '.background',
			connectParticles: true,
			color: '#000000',
			minDistance: 150,
			maxParticles: 300,
			speed: 0.7
		});
	}
	render() {
		return (
			<div>
				{/* <AppBar
					title="Block chain"
				/> */}
				<div styleName="landing-container">
					<h1 styleName="header">Block chain Info</h1>
					<Table fixedHeader multiSelectable="false" height="700" width="2000">
						<TableHeader>
							<TableRow>
								<TableHeaderColumn>HashId</TableHeaderColumn>
								<TableHeaderColumn>Size</TableHeaderColumn>
								<TableHeaderColumn>Transactions</TableHeaderColumn>
								<TableHeaderColumn>Published At</TableHeaderColumn>
								<TableHeaderColumn>MinerId</TableHeaderColumn>
								<TableHeaderColumn>-</TableHeaderColumn>
							</TableRow>
						</TableHeader>
						<TableBody>
							{
							_.sortBy(Object.values(this.props.blockchain), 'timestamp').reverse().map((block, id) => {
								console.log(id);
								let len = 0;
								if (Object.hasOwnProperty.call(block, 'transactions')) {
									len = Object.values(block.transactions).length;
								}
								return (<TableRow>
									<TableRowColumn>{block.hash}</TableRowColumn>
									<TableRowColumn>{block.size}</TableRowColumn>
									<TableRowColumn>{len}</TableRowColumn>
									console.log();
									<TableRowColumn>{moment.unix(block.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</TableRowColumn>
									<TableRowColumn>{block.miner}</TableRowColumn>
									<TableRowColumn>{moment.unix(block.timestamp).startOf('second').fromNow()}
									</TableRowColumn>
								</TableRow>);
							})
						}
						</TableBody>
					</Table>
				</div>

				<canvas className="background" />
			</div>
		);
	}
}

LandingPageComponent.propTypes = {
	blockchain: PropTypes.object.isRequired
};
LandingPageComponent.defaultProps = {};

export default LandingPageComponent;
