/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: images.js
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * Single point source for images, exports all the images
 *
 **/

import Immutable from 'immutable';
import IMG_KNOLSKAPE_LOGO from 'images/knolskape_logo.png';
import IMG_LOADING from 'images/loading.gif';
import IMG_AJAX_LOADING from 'images/ajax_loader.gif';

const images = Immutable.Map({
	IMG_KNOLSKAPE_LOGO,
	IMG_LOADING,
	IMG_AJAX_LOADING
});

export default images;
