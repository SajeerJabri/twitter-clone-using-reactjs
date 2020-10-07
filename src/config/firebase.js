import firebase from 'firebase';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCVTOyx70MHxR43ff4sfhBqQ6eOPqPFql4",
    authDomain: "twitter-clone-5b39c.firebaseapp.com",
    databaseURL: "https://twitter-clone-5b39c.firebaseio.com",
    projectId: "twitter-clone-5b39c",
    storageBucket: "twitter-clone-5b39c.appspot.com",
    messagingSenderId: "566094061645",
    appId: "1:566094061645:web:04e0363f96be5f49b03c04",
    measurementId: "G-QBQZ1GGLW9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };