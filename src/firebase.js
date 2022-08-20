// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWiqMiC4qOXQOajvz26e1O9bZZDtkstak",
  authDomain: "tikto-75a49.firebaseapp.com",
  projectId: "tikto-75a49",
  storageBucket: "tikto-75a49.appspot.com",
  messagingSenderId: "752169293327",
  appId: "1:752169293327:web:891738978a09073292f57a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
export default db;