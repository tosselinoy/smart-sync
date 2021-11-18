import firebase from "firebase/app";
import auth from "firebase/auth";
import store from "firebase/storage"

// Config Firebase To This Project
firebase.initializeApp({
    apiKey: "AIzaSyBHLr8Pf4EJlAS42kLSUtp-pn6mqx1JnXM",
    authDomain: "the-smart-sync.firebaseapp.com",
    databaseURL: "https://the-smart-sync-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "the-smart-sync",
    storageBucket: "the-smart-sync.appspot.com",
    messagingSenderId: "724564155750",
    appId: "1:724564155750:web:13615b35b80a46837a7ca7"
});

export default {
    firebase
}
