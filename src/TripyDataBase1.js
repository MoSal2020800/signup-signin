const firebase = require("firebase/app");
// Required for side-effects
require("firebase/firestore");
require("firebase/auth"); 


var firebaseConfig = {
    apiKey: "AIzaSyDuqe2MjLU1Yi4xHV1wAvTo84atLnpctxU",
    authDomain: "tripy-s-database.firebaseapp.com",
    databaseURL: "https://tripy-s-database.firebaseio.com",
    projectId: "tripy-s-database",
    storageBucket: "tripy-s-database.appspot.com",
    messagingSenderId: "966580767043",
    appId: "1:966580767043:web:867974e900e2abb13f07f6"

}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var auth= firebase.auth()
export { firebase, db as default, auth };