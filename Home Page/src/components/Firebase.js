// backend/Firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDKNGfHf6r1ASHdQOHp__xY0ljD8-RYL3Q",
  authDomain: "hackaholics-5121b.firebaseapp.com",
  projectId: "hackaholics-5121b",
  storageBucket: "hackaholics-5121b.appspot.com",
  messagingSenderId: "777154555640",
  appId: "1:777154555640:web:407cb7b565be72dfb9d50d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();


export { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, db };
