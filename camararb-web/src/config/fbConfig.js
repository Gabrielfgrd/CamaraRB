import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCy7su1rlTXnMv536mpZ4TA3Xi7rKu9aNI",
    authDomain: "camararb-f6e02.firebaseapp.com",
    databaseURL: "https://camararb-f6e02.firebaseio.com",
    projectId: "camararb-f6e02",
    storageBucket: "camararb-f6e02.appspot.com",
    messagingSenderId: "923387632369",
    appId: "1:923387632369:web:2c5f88377c7a9d6d"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;