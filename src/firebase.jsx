/* eslint-disable no-undef */
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Firebase = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementI: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
});

export const auth = Firebase.auth();

export default Firebase;
