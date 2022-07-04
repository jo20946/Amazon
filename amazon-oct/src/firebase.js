// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqesbGTmZMiJw-iPhrXb1Zc6ahua2f3nM",
  authDomain: "oct-ccace.firebaseapp.com",
  projectId: "oct-ccace",
  storageBucket: "oct-ccace.appspot.com",
  messagingSenderId: "862659097053",
  appId: "1:862659097053:web:f41af495c09dad6dcac634",
  measurementId: "G-X4SXXHV1QS",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
