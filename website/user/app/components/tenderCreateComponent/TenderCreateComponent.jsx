/**
 * @author: dharmik
 * @since: Sun Mar 18 2018 21:39:24 GMT+0530 (India Standard Time)
 * @file: TenderCreateComponent.jsx
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
import Header from 'components/header';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import DatePicker from 'material-ui/DatePicker';

import styles from './tendercreatecomponent.sass';

const textFieldStyle = {
	width: '175px',
	marginLeft: '30px'
};

const inputElementStyle = {
	marginLeft: '30px'
};

@CSSModules(styles, { allowMultiple: true })
class TenderCreateComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			description: '',
			criterias: [
				{
					id: 0,
					name: '',
					minValue: 0,
					maxValue: 0,
					type: 'number',
					minOrMax: 1
				}
			]
		};
	}

	onChangeName = (event) => {
		this.setState({
			name: event.target.value
		});
	}

	onChangeDescription = (event) => {
		this.setState({
			description: event.target.value
		});
	}

	onSubmitTender = (event) => {
		event.preventDefault();
		console.log('Form submitted');
		console.log(this.state);
		console.log(this.props);

		this.props.submitTender(this.state);
		const routeToRedirect = `admin/${this.props.params.id}/dashboard`;
		this.props.updateRouteOnTenderSubmission(routeToRedirect);
	}

	onChangeCriteriaName = (idx) => (event) => {
		const newCriterias = this.state.criterias.map((criteria, sidx) => {
			if (idx !== sidx) return criteria;
			return { ...criteria, name: event.target.value };
		});

		this.setState({ criterias: newCriterias });
	}

	onChangeCriteriaMinVal = (idx) => (event) => {
		const newCriterias = this.state.criterias.map((criteria, sidx) => {
			if (idx !== sidx) return criteria;
			return { ...criteria, minValue: +event.target.value };
		});

		this.setState({ criterias: newCriterias });
	}

	onChangeCriteriaMaxVal = (idx) => (event) => {
		const newCriterias = this.state.criterias.map((criteria, sidx) => {
			if (idx !== sidx) return criteria;
			return { ...criteria, maxValue: +event.target.value };
		});

		this.setState({ criterias: newCriterias });
	}

	onChangeCriteriaMinOrMax = (idx) => (event, index, value) => {
		const newCriterias = this.state.criterias.map((criteria, sidx) => {
			if (idx !== sidx) return criteria;
			return { ...criteria, minOrMax: value === true ? 1 : -1 };
		});

		this.setState({ criterias: newCriterias });
	}

	onChangeCriteriaType = (idx) => (event, index, value) => {
		const newCriterias = this.state.criterias.map((criteria, sidx) => {
			if (idx !== sidx) return criteria;
			return { ...criteria, type: value === true ? 'number' : 'date' };
		});

		this.setState({ criterias: newCriterias });
	}

	onChangeCriteriaStartDate = (idx) => (event, date) => {
		const newCriterias = this.state.criterias.map((criteria, sidx) => {
			if (idx !== sidx) return criteria;
			return { ...criteria, minValue: +new Date(date).getTime() };
		});

		this.setState({ criterias: newCriterias });
	}

	onChangeCriteriaEndDate = (idx) => (event, date) => {
		console.log(idx, event, date);
		const newCriterias = this.state.criterias.map((criteria, sidx) => {
			if (idx !== sidx) return criteria;
			return { ...criteria, maxValue: +new Date(date).getTime() };
		});

		this.setState({ criterias: newCriterias });
	}

	onRemoveCriteria = (idx) => () => {
		this.setState({ criterias: this.state.criterias.filter((s, sidx) => idx !== sidx) });
	}

	onAddCriteria = () => {
		const newId = this.state.criterias.length;
		this.setState({ criterias: this.state.criterias.concat([
			{
				id: newId,
				name: '',
				minValue: 0,
				maxValue: 0,
				type: 'number',
				minOrMax: -1
			}
		]) });
	}

	renderCriteria = () => {
		console.log('Displaying criterias');
		return this.state.criterias.map((criteria, idx) => {
			const isNumber = this.state.criterias[idx].type === 'number';
			console.log(criteria, idx, isNumber);
			return (
				<div className="criteria" styleName="criteria">
					<TextField
						floatingLabelText="Criteria name"
						hintText="Enter name of the criteria"
						value={this.state.criterias[idx].name}
						onChange={this.onChangeCriteriaName(idx)}
						style={inputElementStyle}
					/>
					<SelectField
						floatingLabelText="Data Type"
						value={this.state.criterias[idx].type === 'number'}
						onChange={this.onChangeCriteriaType(idx)}
						style={textFieldStyle}
						style={inputElementStyle}
					>
						<MenuItem value={false} primaryText="date" />
						<MenuItem value primaryText="number" />
					</SelectField>
					{
						isNumber ? (
							<div>
								<TextField
									floatingLabelText="Min value"
									hintText="Enter min value"
									value={this.state.criterias[idx].minValue}
									onChange={this.onChangeCriteriaMinVal(idx)}
									style={textFieldStyle}
								/>
								<TextField
									floatingLabelText="Max value"
									hintText="Enter max value"
									value={this.state.criterias[idx].maxValue}
									onChange={this.onChangeCriteriaMaxVal(idx)}
									style={textFieldStyle}
								/>
							</div>

						) : (
							<div style={{ display: 'flex' }}>
								<DatePicker
									name="startDate"
									hintText="Start date"
									textFieldStyle={textFieldStyle}
									style={textFieldStyle}
									onChange={this.onChangeCriteriaStartDate(idx)}
								/>
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
					<SelectField
						floatingLabelText="Maximize or Minimize?"
						value={this.state.criterias[idx].minOrMax === 1}
						onChange={this.onChangeCriteriaMinOrMax(idx)}
						style={textFieldStyle}
					>
						<MenuItem value={null} primaryText="" />
						<MenuItem value={false} primaryText="Minimize" />
						<MenuItem value primaryText="Maximize" />
					</SelectField>
					<FloatingActionButton
						mini
						onClick={this.onRemoveCriteria(idx)}
						style={inputElementStyle}
					>
						<ContentRemove />
					</FloatingActionButton>
				</div>
			);
		});
	}

	render() {
		return (
			<div styleName="tendercreatecomponent-component">
				<Header title="Create Tender" />
				<form className="tenderForm" styleName="tenderForm" onSubmit={this.onSubmitTender}>
					<TextField
						id="name"
						floatingLabelText="Name of the tender"
						hintText="Enter name of the tender"
						value={this.state.name}
						onChange={this.onChangeName}
					/>
					<TextField
						id="description"
						floatingLabelText="Description of the tender"
						hintText="Enter description about the tender"
						multiLine
						rows={4}
						rowsMax={4}
						value={this.state.description}
						onChange={this.onChangeDescription}
					/>
					<div styleName="criteria-group">
						{this.renderCriteria()}
					</div>
					<RaisedButton
						label="Add Criteria"
						primary
						onClick={this.onAddCriteria}
					/>
					<RaisedButton
						label="Submit"
						secondary
						fullWidth={false}
						type="submit"
					/>
				</form>
			</div>
		);
	}
}

TenderCreateComponent.propTypes = {
	params: PropTypes.object,
	submitTender: PropTypes.func.isRequired,
	updateRouteOnTenderSubmission: PropTypes.func.isRequired
};
TenderCreateComponent.defaultProps = {};

export default TenderCreateComponent;
