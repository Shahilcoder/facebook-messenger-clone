import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyABn5Ea-EnQoQiClyHTSXN3vICxR6vOpiw",
        authDomain: "facebook-messenger-clone-4e83b.firebaseapp.com",
        projectId: "facebook-messenger-clone-4e83b",
        storageBucket: "facebook-messenger-clone-4e83b.appspot.com",
        messagingSenderId: "213482916276",
        appId: "1:213482916276:web:5b29fd6b3d9a6125e30ae1",
        measurementId: "G-PVNRH4KN9F"
});

const db = firebaseApp.firestore();

export default db;