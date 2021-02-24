import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJRgA-aAAjDXSULdHggl9jKxrTpuKJq7w",
    authDomain: "slack-clone-challenge-2f429.firebaseapp.com",
    projectId: "slack-clone-challenge-2f429",
    storageBucket: "slack-clone-challenge-2f429.appspot.com",
    messagingSenderId: "691494891490",
    appId: "1:691494891490:web:c4f3dfdfe75cf559e453bb",
    measurementId: "G-6TC9SHEW7F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;