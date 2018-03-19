/**
 * @author: dharmik
 * @since: Mon Mar 19 2018 16:06:50 GMT+0530 (India Standard Time)
 * @file: VendorApplyComponent.jsx
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
import * as _ from 'lodash';
import Loader from 'components/loader';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

import styles from './vendorapplycomponent.sass';

const textFieldStyle = {
	width: '175px',
	marginLeft: '30px'
};

const inputElementStyle = {
	marginLeft: '30px'
};

@CSSModules(styles, { allowMultiple: true })
class VendorApplyComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	componentDidMount() {
		const criterias = Object.values(this.props.tender.criterias);
		const data = [];
		let newData = null;
		criterias.map(() => {
			newData = null;
			data.push(newData);
		});
		this.setInitialValues(data);
	}

	onApplyTender = () => {
		const vendorId = this.props.routeParams.id;
		const tenderId = this.props.routeParams.tender_id;
		const data = this.state.data;
		console.log(vendorId, tenderId, data);
		this.props.applyForTender(vendorId, tenderId, data);
	}

	onChangeCriteriaVal = (idx) => (event) => {
		const newData = this.state.data.map((d, sidx) => {
			if (idx !== sidx) return d;
			return +(event.target.value);
		});

		this.setState({ data: newData });
	}

	onChangeCriteriaEndDate = (idx) => (event, date) => {
		console.log(idx, event, date);
		const newData = this.state.data.map((d, sidx) => {
			if (idx !== sidx) return d;
			return +(new Date(date).getTime());
		});

		this.setState({ data: newData });
	}

	setInitialValues = (data) => {
		console.log(data);
		this.setState({ data });
	}

	renderCriterias = () => {
		const criterias = Object.values(this.props.tender.criterias);

		return criterias.map((criteria, idx) => {
			console.log(criteria);
			const isNumber = criteria.type === 'number';
			return (
				<div className="criteria" styleName="criteria">
					<TextField
						floatingLabelText="Criteria name"
						hintText="Enter name of the criteria"
						value={criteria.name}
						style={inputElementStyle}
					/>
					{
						isNumber ? (
							<div>
								<TextField
									floatingLabelText="Value"
									hintText="Enter value"
									style={textFieldStyle}
									onChange={this.onChangeCriteriaVal(idx)}
								/>
							</div>

						) : (
							<div style={{ display: 'flex' }}>
								<DatePicker
									name="endDate"
									hintText="End date"
									textFieldStyle={textFieldStyle}
									style={textFieldStyle}
									onChange={this.onChangeCriteriaEndDate(idx)}
								/>
							</div>
						)
					}
				</div>
			);
		});
	}

	render() {
		if (_.isEmpty(this.props.tender)) {
			return <Loader />;
		}
		console.log(this.props.tender);
		const tender = this.props.tender;
		return (
			<div styleName="vendorapplycomponent-component">
				<div id="name">{tender.name}</div>
				<div id="description">{tender.description}</div>
				<div styleName="criteria-group">
					{this.renderCriterias()}
				</div>
				<RaisedButton
					label="Submit"
					secondary
					onClick={this.onApplyTender}
				/>
			</div>
		);
	}
}

VendorApplyComponent.propTypes = {
	tender: PropTypes.object,
	routeParams: PropTypes.object,
	applyForTender: PropTypes.func.isRequired
};
VendorApplyComponent.defaultProps = {};

export default VendorApplyComponent;
