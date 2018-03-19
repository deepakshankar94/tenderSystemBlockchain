import firebase from 'firebase';
// import * as _ from 'lodash';
import store from 'store/store';

const computeTenderPoints = (tenderId, criteriaIdAndValueObject) => {
	let points = 0;
	const stateCopy = store.getState().toJS();
	const tenderCriteriasInfo = stateCopy.tenders[tenderId].criterias;
	const usersCriteriaIds = Object.keys(criteriaIdAndValueObject);
	console.log(`userCriteria ids are ${usersCriteriaIds}`);
	for (let i = 0; i < usersCriteriaIds.length; i++)	{
		const userCriteriaId = usersCriteriaIds[i];
		console.log('inside user criteria id');
		console.log(userCriteriaId);
		console.log(tenderCriteriasInfo);
		const tenderCriteriaInfo = tenderCriteriasInfo[userCriteriaId];
		console.log('tender criteria info');
		console.log(tenderCriteriaInfo);
		let userCriteriaValue = null;
		let scale = null;
		if (tenderCriteriaInfo.type === 'date') {
			console.log('inside date');
			console.log(criteriaIdAndValueObject[userCriteriaId]);
			userCriteriaValue = criteriaIdAndValueObject[userCriteriaId] - tenderCriteriaInfo.minValue;
			scale = tenderCriteriaInfo.maxValue - tenderCriteriaInfo.minValue;
		} else {
			scale = tenderCriteriaInfo.maxValue - tenderCriteriaInfo.minValue;
			userCriteriaValue = criteriaIdAndValueObject[userCriteriaId];
		}

		console.log(userCriteriaValue);
		console.log(scale);
		if (scale === 0) {
			points = 0;
		} else {
			points += parseFloat([(((userCriteriaValue / scale) * 10) - 5)
				* tenderCriteriaInfo.minOrMax]);
		}
		console.log(`points are ${points}`);
	}
	return points;
};

const applyForTender = (userId, tenderId, criteriaIdAndValueObject) => (dispatch) => {
	console.log('apply for tender action generator thunk is called');
	const payload = {
		userId,
		tenderId,
		criteriaInfo: criteriaIdAndValueObject,
		submittedAt: 1362076200,
		points: computeTenderPoints(tenderId, criteriaIdAndValueObject)
	};
	payload.id = tenderId;
	firebase.database().ref(`vendors/${userId}/tenders/${tenderId}`).set(payload, () => {

		dispatch({
			type: 'APPLY_FOR_TENDER',
			payload
		});
	});
	payload.id = userId;
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
