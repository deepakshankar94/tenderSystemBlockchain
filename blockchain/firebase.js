var firebase = require('firebase');
var defaultApp = firebase.initializeApp({
    apiKey: "AIzaSyA5tUpUL4kEY00lqNxflllyjD8acAotzqc",
    authDomain: "tender-management-app.firebaseapp.com",
    databaseURL: "https://tender-management-app.firebaseio.com",
    projectId: "tender-management-app",
    storageBucket: "tender-management-app.appspot.com",
    messagingSenderId: "488105138922"
  });

console.log(defaultApp.name);
var defaultDatabase = defaultApp.database();
var ref = defaultDatabase.ref("test")
// .set({
//     username: "tesst",
//     email: "test@mail.com",
//     "id":0
// });

//Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

