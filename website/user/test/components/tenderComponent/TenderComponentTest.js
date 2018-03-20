/**
 * @author: dharmik
 * @since: Sun Mar 18 2018 21:43:44 GMT+0530 (India Standard Time)
 * @file: TenderComponent.jsx
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * FILE DESCRIPTION
 *
 **/

import React from 'react';
import { shallow } from 'enzyme';
import TenderComponent from 'components\tenderComponent\TenderComponent.js';

describe('<TenderComponent />', function () {

	let component;
	beforeEach(function () {
		component = shallow(<TenderComponent />);
	});

	describe('when rendering the component', function () {

		it('should have a className of "tendercomponent-component"', function () {
			expect(component.hasClass('tendercomponent-component')).to.equal(true);
		});
	});
});
