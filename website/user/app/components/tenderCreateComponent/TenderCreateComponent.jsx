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

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';

import styles from './tendercreatecomponent.sass';

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
					minVal: 0,
					maxVal: 0,
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

	onTenderSubmit = (event) => {
		event.preventDefault();
		console.log('Form submitted');
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
			return { ...criteria, minVal: +event.target.value };
		});

		this.setState({ criterias: newCriterias });
	}

	onChangeCriteriaMaxVal = (idx) => (event) => {
		const newCriterias = this.state.criterias.map((criteria, sidx) => {
			if (idx !== sidx) return criteria;
			return { ...criteria, maxVal: +event.target.value };
		});

		this.setState({ criterias: newCriterias });
	}

	onChangeCriteriaMinOrMax = (idx) => (event) => {
		console.log(idx, event.target.key);
		const newCriterias = this.state.criterias.map((criteria, sidx) => {
			if (idx !== sidx) return criteria;
			return { ...criteria, minOrMax: event.target.key === true ? 1 : -1 };
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
				minVal: 0,
				maxVal: 0,
				type: 'number',
				minOrMax: -1
			}
		]) });
	}

	renderCriteria = () => {
		console.log('Displaying criterias');
		return this.state.criterias.map((criteria, idx) => {
			console.log(criteria, idx);
			return (
				<div className="criteria" styleName="criteria">
					<TextField
						floatingLabelText="Criteria name"
						hintText="Enter name of the criteria"
						value={this.state.criterias[idx].name}
						onChange={this.onChangeCriteriaName(idx)}
					/>
					<TextField
						floatingLabelText="Min value"
						hintText="Enter min value"
						value={this.state.criterias[idx].minVal}
						onChange={this.onChangeCriteriaMinVal(idx)}
					/>
					<TextField
						floatingLabelText="Max value"
						hintText="Enter max value"
						value={this.state.criterias[idx].maxVal}
						onChange={this.onChangeCriteriaMaxVal(idx)}
					/>
					<SelectField
						floatingLabelText="Maximize or Minimize?"
						value={this.state.criterias[idx].minOrMax === 1}
						onChange={this.onChangeCriteriaMinOrMax(idx)}
					>
						<MenuItem value={null} primaryText="" />
						<MenuItem value={false} primaryText="Minimize" />
						<MenuItem value primaryText="Maximize" />
					</SelectField>
					<FloatingActionButton mini onClick={this.onRemoveCriteria(idx)}>
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
				<form className="tenderForm" styleName="tenderForm" onSubmit={this.onTenderSubmit}>
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

TenderCreateComponent.propTypes = {};
TenderCreateComponent.defaultProps = {};

export default TenderCreateComponent;
