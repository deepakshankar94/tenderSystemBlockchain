import firebase from 'firebase';
// import * as _ from 'lodash';


const applyForTender = (userId, tenderId, criteriaIdAndValueObject) => (dispatch) => {
	console.log('apply for tender action generator thunk is called');
	const payload = {
		userId,
		tenderId,
		criteriaInfo: criteriaIdAndValueObject,
		submittedAt: 1362076200
	};
	firebase.database().ref(`vendors/${userId}/tenders/${tenderId}`).set(payload, () => {
		dispatch({
			type: 'APPLY_FOR_TENDER',
			payload
		});
	});
	firebase.database().ref(`tenders/${tenderId}/vendors/${userId}`).set(payload, () => {
		dispatch({
			type: 'ADD_VENDOR_SUBMISSION',
			payload
		});
	});
};
const fetchAppliedTenders = (userId) => {
	console.log(userId);
};
export {
	applyForTender,
	fetchAppliedTenders
};
