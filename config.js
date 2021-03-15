import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDzMbAIoBqh9JZGLRdpGBK7ae6y8s-x_l0",
  authDomain: "willy-d4f37.firebaseapp.com",
  projectId: "willy-d4f37",
  storageBucket: "willy-d4f37.appspot.com",
  messagingSenderId: "457744026304",
  appId: "1:457744026304:web:b9c1912bf8d173bebe3b25",
  measurementId:'willy-d4f37'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
