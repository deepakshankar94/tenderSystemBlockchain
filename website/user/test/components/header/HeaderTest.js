/**
 * @author: dharmik
 * @since: Sun Mar 18 2018 16:49:01 GMT+0530 (India Standard Time)
 * @file: Header.jsx
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
import Header from 'components\header\Header.js';

describe('<Header />', function () {

	let component;
	beforeEach(function () {
		component = shallow(<Header />);
	});

	describe('when rendering the component', function () {

		it('should have a className of "header-component"', function () {
			expect(component.hasClass('header-component')).to.equal(true);
		});
	});
});
