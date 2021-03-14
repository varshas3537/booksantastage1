import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDRhILhDGiOm2W3n3ggatuGsu8N0b1DXpA",
  authDomain: "book-santa-df3eb.firebaseapp.com",
  databaseURL: "https://book-santa-df3eb.firebaseio.com",
  projectId: "book-santa-df3eb",
  storageBucket: "book-santa-df3eb.appspot.com",
  messagingSenderId: "508636556441",
  appId: "1:508636556441:web:90eb18552774188bb31c08"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
