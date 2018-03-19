import firebase from 'firebase';

const initFirebaseDB = () => {
	const firebaseConfig = {
		apiKey: 'AIzaSyA5tUpUL4kEY00lqNxflllyjD8acAotzqc',
		authDomain: 'tender-management-app.firebaseapp.com',
		databaseURL: 'https://tender-management-app.firebaseio.com',
		projectId: 'tender-management-app',
		storageBucket: '',
		messagingSenderId: '488105138922'

		// apiKey: 'AIzaSyDH5ARr37bbsQ4Ao-UZu6iYdi6lpROehuw',
		// authDomain: 'tender-data-testing.firebaseapp.com',
		// databaseURL: 'https://tender-data-testing.firebaseio.com',
		// projectId: 'tender-data-testing',
		// storageBucket: 'tender-data-testing.appspot.com',
		// messagingSenderId: '19312005775'
	};
	firebase.initializeApp(firebaseConfig);
};
const getDatabase = () => {
	console.log('hello world');
};
export {
	initFirebaseDB,
	getDatabase
};
