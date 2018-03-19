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
import { shallow } from 'enzyme';
import VendorApplyComponent from 'components\vendorApplyComponent\VendorApplyComponent.js';

describe('<VendorApplyComponent />', function () {

	let component;
	beforeEach(function () {
		component = shallow(<VendorApplyComponent />);
	});

	describe('when rendering the component', function () {

		it('should have a className of "vendorapplycomponent-component"', function () {
			expect(component.hasClass('vendorapplycomponent-component')).to.equal(true);
		});
	});
});
