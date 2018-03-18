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
import { shallow } from 'enzyme';
import TenderCreateComponent from 'components\tenderCreateComponent\TenderCreateComponent.js';

describe('<TenderCreateComponent />', function () {

	let component;
	beforeEach(function () {
		component = shallow(<TenderCreateComponent />);
	});

	describe('when rendering the component', function () {

		it('should have a className of "tendercreatecomponent-component"', function () {
			expect(component.hasClass('tendercreatecomponent-component')).to.equal(true);
		});
	});
});
