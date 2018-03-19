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
					<Table fixedHeader height="500">
						<TableHeader>
							<TableRow>
								<TableHeaderColumn>HashId</TableHeaderColumn>
								<TableHeaderColumn>Size</TableHeaderColumn>
								<TableHeaderColumn>Transactions</TableHeaderColumn>
								<TableHeaderColumn>MinerId</TableHeaderColumn>
							</TableRow>
						</TableHeader>
						<TableBody>
							{
							Object.values(this.props.blockchain).map((block, id) => {
								console.log(id);
								return (<TableRow>
									<TableRowColumn>hashId: {block.hash}</TableRowColumn>
									<TableRowColumn>{block.size}</TableRowColumn>
									<TableRowColumn>{block.transactions.length()}</TableRowColumn>
									<TableRowColumn>{block.miner}</TableRowColumn>
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
