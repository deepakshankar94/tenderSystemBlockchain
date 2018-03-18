/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: index.jsx
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * index file is entry for the application and loads the root component
 * Here we render AppProvider to the DOM
 *
 **/

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppProvider from 'providers/AppProvider';

// polyfill for touch events
injectTapEventPlugin();

ReactDOM.render(<AppProvider />, document.getElementById('app'));
