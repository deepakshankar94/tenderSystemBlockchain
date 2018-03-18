/**
 * @author: dharmik
 * @since: Sun Mar 18 2018 16:51:52 GMT+0530 (India Standard Time)
 * @file: TenderCard.jsx
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
import TenderCard from 'components\tenderCard\TenderCard.js';

describe('<TenderCard />', function () {

	let component;
	beforeEach(function () {
		component = shallow(<TenderCard />);
	});

	describe('when rendering the component', function () {

		it('should have a className of "tendercard-component"', function () {
			expect(component.hasClass('tendercard-component')).to.equal(true);
		});
	});
});
