/**
 * @author: dharmik
 * @since: Sun Mar 18 2018 16:51:20 GMT+0530 (India Standard Time)
 * @file: ListTendersComponent.jsx
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
import ListTendersComponent from 'components\listTendersComponent\ListTendersComponent.js';

describe('<ListTendersComponent />', function () {

	let component;
	beforeEach(function () {
		component = shallow(<ListTendersComponent />);
	});

	describe('when rendering the component', function () {

		it('should have a className of "listtenderscomponent-component"', function () {
			expect(component.hasClass('listtenderscomponent-component')).to.equal(true);
		});
	});
});
