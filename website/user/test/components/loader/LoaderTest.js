/**
 * @author: dharmik
 * @since: Sun Mar 18 2018 19:57:00 GMT+0530 (India Standard Time)
 * @file: Loader.jsx
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
import Loader from 'components\loader\Loader.js';

describe('<Loader />', function () {

	let component;
	beforeEach(function () {
		component = shallow(<Loader />);
	});

	describe('when rendering the component', function () {

		it('should have a className of "loader-component"', function () {
			expect(component.hasClass('loader-component')).to.equal(true);
		});
	});
});
