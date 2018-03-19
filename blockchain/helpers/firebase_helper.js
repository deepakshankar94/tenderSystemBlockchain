var firebase = require('firebase');



//establishes db connection
function establishDatabaseConnection() {
	
	var defaultApp = firebase.initializeApp({
	    apiKey: "AIzaSyA5tUpUL4kEY00lqNxflllyjD8acAotzqc",
	    authDomain: "tender-management-app.firebaseapp.com",
	    databaseURL: "https://tender-management-app.firebaseio.com",
	    projectId: "tender-management-app",
	    storageBucket: "tender-management-app.appspot.com",
	    messagingSenderId: "488105138922"
	  });

	var defaultDatabase = defaultApp.database();
}


module.exports = {
	"establishDatabaseConnection" : establishDatabaseConnection
};