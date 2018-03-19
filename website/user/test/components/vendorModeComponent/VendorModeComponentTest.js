/**
 * @author: dharmik
 * @since: Mon Mar 19 2018 15:57:16 GMT+0530 (India Standard Time)
 * @file: VendorModeComponent.jsx
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
import VendorModeComponent from 'components\vendorModeComponent\VendorModeComponent.js';

describe('<VendorModeComponent />', function () {

	let component;
	beforeEach(function () {
		component = shallow(<VendorModeComponent />);
	});

	describe('when rendering the component', function () {

		it('should have a className of "vendormodecomponent-component"', function () {
			expect(component.hasClass('vendormodecomponent-component')).to.equal(true);
		});
	});
});
