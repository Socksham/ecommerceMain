import firebase from 'firebase';
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBWx_UMzV1iI70XTIld3HarM3K4gqASRYU",
    authDomain: "stockoli.firebaseapp.com",
    projectId: "stockoli",
    storageBucket: "stockoli.appspot.com",
    messagingSenderId: "715693214323",
    appId: "1:715693214323:web:03fcd8af8c20a0f8ceb806",
    measurementId: "G-D6WTHB2EQ2"
})

const db = firebase.firestore()

db.settings({
    timestampsInSnapshots: true,
    merge: true
})

const auth = firebaseApp.auth()
const storage = firebaseApp.storage()

export { db, auth, storage }