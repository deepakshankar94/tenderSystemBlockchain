import firebase from 'firebase';
import * as _ from 'lodash';
import store from 'store/store';
import { prepareHashedObjectsForArraysInJSON } from 'util/jsonFormatter';

const fetchUsers = () => (dispatch) => {
	firebase.database().ref('users').once('value').then((data) => {
		dispatch({
			type: 'FETCH_USERS_STATE',
			payload: prepareHashedObjectsForArraysInJSON(data.val(), 'id')
		});
	})
	.then(() => {
		firebase.database().ref('users').on('value', (data) =>	{
			const stateData = store.getState().toJS();
			if (!(_.isEqual(stateData.users, data.val()))) {
				dispatch({
					type: 'UPDATE_USERS_STATE',
					payload: prepareHashedObjectsForArraysInJSON(data.val(), 'id')
				});
			}
		});
	});
};

const addUser = (value) => (dispatch) => {
	console.log('add the user action creator');
	const dbRef = firebase.database().ref('users');
	const key = dbRef.push().key;
	const valueCopy = JSON.parse(JSON.stringify(value));
	valueCopy.id = key;
	dbRef.push(valueCopy, () => {
		dispatch({
			type: 'ADD_OR_UPDATE_USER',
			payload: {
				key,
				valueCopy
			}
		});
	});

};

const updateUser = (key, value) => (dispatch) => {
	console.log('update a user action creator');
	const dbRef = firebase.database().ref(`users/${key}`);
	dbRef.set(value, () => {
		dispatch({
			type: 'ADD_OR_UPDATE_USER',
			payload: {
				key,
				value
			}
		});
	});

};

const deleteUser = (key) => (dispatch) => {
	console.log('deleting a user action creator');
	const dbRef = firebase.database().ref(`users/${key}`);
	dbRef.remove(key).then(() => {
		dispatch({
			type: 'DELETE_USER',
			payload: {
				key
			}
		});
	});
};
//
// const applyForTender = (userId, tenderId) => (dispatch) => {
// };
//

export {
	fetchUsers,
	addUser,
	updateUser,
	deleteUser
};
