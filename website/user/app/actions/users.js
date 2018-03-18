import firebase from 'firebase';
import * as _ from 'lodash';
import store from 'store/store';
import { prepareHashedObjectsForArraysInJSON } from 'util/jsonFormatter';

const fetchUsers = () => (dispatch) => {
	firebase.database().ref('tenders').once('value').then((data) => {
		dispatch({
			type: 'FETCH_USERS_STATE',
			payload: prepareHashedObjectsForArraysInJSON(data.val(), 'id')
		});
	});
};

const subscribeForUsers = () => (dispatch) => {
	firebase.database().ref('tenders').on('value', (data) =>	{
		const stateData = store.getState().toJS();
		if (!(_.isEqual(stateData.tenders, data.val()))) {
			dispatch({
				type: 'UPDATE_USERS_STATE',
				payload: prepareHashedObjectsForArraysInJSON(data.val(), 'id')
			});
		}
	});
};

const addOrUpdateTender = (key, value) => ({
	type: 'ADD_OR_UPDATE_USER',
	payload: {
		key,
		value
	}
});

export {
	fetchUsers,
	subscribeForUsers,
	addOrUpdateTender
};
