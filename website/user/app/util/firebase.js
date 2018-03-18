import firebase from 'firebase';

const initFirebaseDB = () => {
	const firebaseConfig = {
		apiKey: 'AIzaSyA5tUpUL4kEY00lqNxflllyjD8acAotzqc',
		authDomain: 'tender-management-app.firebaseapp.com',
		databaseURL: 'https://tender-management-app.firebaseio.com',
		projectId: 'tender-management-app',
		storageBucket: '',
		messagingSenderId: '488105138922'
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
