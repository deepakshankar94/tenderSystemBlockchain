import firebase from 'firebase';
import * as _ from 'lodash';
import store from 'store/store';
import { prepareHashedObjectsForArraysInJSON } from 'util/jsonFormatter';

const fetchTenders = () => (dispatch) => {
	firebase.database().ref('tenders').once('value').then((data) => {
		dispatch({
			type: 'FETCH_TENDERS_STATE',
			payload: prepareHashedObjectsForArraysInJSON(data.val(), 'id')
		});
	})
	.then(() => {
		firebase.database().ref('tenders').on('value', (data) =>	{
			const stateData = store.getState().toJS();
			if (!(_.isEqual(stateData.tenders, data.val()))) {
				dispatch({
					type: 'UPDATE_TENDERS_STATE',
					payload: prepareHashedObjectsForArraysInJSON(data.val(), 'id')
				});
			}
		});
	});
};

const addTender = (value) => (dispatch) => {
	console.log('add the tender action creator');
	const dbRef = firebase.database().ref('tenders');
	const key = dbRef.push().key;
	const valueCopy = JSON.parse(JSON.stringify(value));
	valueCopy.id = key;
	dbRef.push(valueCopy, () => {
		dispatch({
			type: 'ADD_OR_UPDATE_TENDER',
			payload: {
				key,
				valueCopy
			}
		});
	});

};

const updateTender = (key, value) => (dispatch) => {
	console.log('update a tender action creator');
	const dbRef = firebase.database().ref(`tenders/${key}`);
	dbRef.set(value, () => {
		dispatch({
			type: 'ADD_OR_UPDATE_TENDER',
			payload: {
				key,
				value
			}
		});
	});

};

const deleteTender = (key) => (dispatch) => {
	console.log('deleting a tender action creator');
	const dbRef = firebase.database().ref(`tenders/${key}`);
	dbRef.remove(key).then(() => {
		dispatch({
			type: 'DELETE_TENDER',
			payload: {
				key
			}
		});
	});
};

export {
	fetchTenders,
	addTender,
	updateTender,
	deleteTender
};
