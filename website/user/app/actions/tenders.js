import firebase from 'firebase';
import * as _ from 'lodash';
import store from 'store/store';
import { prepareHashedObjectsForArraysInJSON } from 'util/jsonFormatter';

const firebaseConfig = {
	apiKey: 'AIzaSyA5tUpUL4kEY00lqNxflllyjD8acAotzqc',
	authDomain: 'tender-management-app.firebaseapp.com',
	databaseURL: 'https://tender-management-app.firebaseio.com',
	projectId: 'tender-management-app',
	storageBucket: '',
	messagingSenderId: '488105138922'
};
firebase.initializeApp(firebaseConfig);

const fetchTenders = () => (dispatch) => {
	firebase.database().ref('tenders').once('value').then((data) => {
		dispatch({
			type: 'FETCH_TENDERS_STATE',
			payload: prepareHashedObjectsForArraysInJSON(data.val(), 'id')
		});
	});
};

const subscribeForTenders = () => (dispatch) => {
	firebase.database().ref('tenders').on('value', (data) =>	{
		const stateData = store.getState().toJS();
		if (!(_.isEqual(stateData.tenders, data.val()))) {
			dispatch({
				type: 'UPDATE_TENDERS_STATE',
				payload: prepareHashedObjectsForArraysInJSON(data.val(), 'id')
			});
		}
	});
};

const addOrUpdateTender = (key, value) => ({
	type: 'ADD_OR_UPDATE_TENDER',
	payload: {
		key,
		value
	}
});

export {
	fetchTenders,
	subscribeForTenders,
	addOrUpdateTender
};
