import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyA5tUpUL4kEY00lqNxflllyjD8acAotzqc',
	authDomain: 'tender-management-app.firebaseapp.com',
	databaseURL: 'https://tender-management-app.firebaseio.com',
	projectId: 'tender-management-app',
	storageBucket: '',
	messagingSenderId: '488105138922'
};

const initializeFirebase = () => {
	firebase.initializeApp(firebaseConfig);
};
export default initializeFirebase;
