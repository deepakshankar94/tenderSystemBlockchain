import firebase from 'firebase';
import store from 'store/store';
import { prepareHashedObjectsForArraysInJSON } from 'util/jsonFormatter';
import * as _ from 'lodash';

const fetchVendors = (dispatch) => firebase.database().ref('vendors').once('value').then((data) => {
	dispatch({
		type: 'FETCH_VENDORS_STATE',
		payload: prepareHashedObjectsForArraysInJSON(data.val(), 'id')
	});
})
	.then(() => {
		firebase.database().ref('vendors').on('value', (data) =>	{
			const stateData = store.getState().toJS();
			if (!(_.isEqual(stateData.tenders, data.val()))) {
				dispatch({
					type: 'UPDATE_VENDORS_STATE',
					payload: prepareHashedObjectsForArraysInJSON(data.val(), 'id')
				});
			}
		});
	});

const fetchAppliedTenders = (userId) => {
	console.log(userId);
};
export {
	fetchAppliedTenders,
	fetchVendors
};
