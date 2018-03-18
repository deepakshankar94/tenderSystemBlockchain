/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: dist.js
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * Settings configured here will be merged into the final config object.
 *
 **/

import Immutable from 'immutable';
import baseConfig from './base';

const config = Immutable.fromJS({
	appEnv: 'dist'
});

export default baseConfig.merge(config);
