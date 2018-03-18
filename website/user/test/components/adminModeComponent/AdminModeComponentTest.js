/**
 * @author: dharmik
 * @since: Sun Mar 18 2018 16:50:41 GMT+0530 (India Standard Time)
 * @file: AdminModeComponent.jsx
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
import AdminModeComponent from 'components\adminModeComponent\AdminModeComponent.js';

describe('<AdminModeComponent />', function () {

	let component;
	beforeEach(function () {
		component = shallow(<AdminModeComponent />);
	});

	describe('when rendering the component', function () {

		it('should have a className of "adminmodecomponent-component"', function () {
			expect(component.hasClass('adminmodecomponent-component')).to.equal(true);
		});
	});
});
