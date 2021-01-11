import firebase from "firebase/app";
require('firebase/database');
require('firebase/auth');

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyCVaqZETdTxZxLm8BPAWNg3neZLRug7HUg",
  authDomain: "demouniverse-25228.firebaseapp.com",
  projectId: "demouniverse-25228",
  storageBucket: "demouniverse-25228.appspot.com",
  messagingSenderId: "505304012383",
  appId: "1:505304012383:web:ce07928a4b3e9e9eb56dea",
};
// Initialize Firebase
var app = firebase.initializeApp(config);
const db = app.database()

export { app, db };
