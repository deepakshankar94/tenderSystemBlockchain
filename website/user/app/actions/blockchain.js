import firebase from 'firebase';
import store from 'store/store';
import { prepareHashedObjectsForArraysInJSON } from 'util/jsonFormatter';
import * as _ from 'lodash';

const fetchBlockChain = (dispatch) => firebase.database().ref('blockchain').once('value').then((data) => {
	console.log(data.val());
	dispatch({
		type: 'FETCH_BLOCKCAHIN_STATE',
		payload: prepareHashedObjectsForArraysInJSON(data.val(), 'id')
	});
})
.then(() => {
	firebase.database().ref('blockchain').on('value', (data) =>	{
		const stateData = store.getState().toJS();
		if (!(_.isEqual(stateData.tenders, data.val()))) {
			dispatch({
				type: 'UPDATE_BLOCKCHAIN_STATE',
				payload: prepareHashedObjectsForArraysInJSON(data.val(), 'id')
			});
		}
	});
});

const fetchBlockChainThunk = (userId) => {
	console.log(userId);
};
export {
	fetchBlockChain,
	fetchBlockChainThunk
};
