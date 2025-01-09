// src/firebase/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore for data management
import { getAuth } from "firebase/auth"; // Import Firebase Auth for authentication

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9B5JKVLIYsnZfPFEtCNKacemfA69dIeM",
  authDomain: "nizamievents-e41b4.firebaseapp.com",
  projectId: "nizamievents-e41b4",
  storageBucket: "nizamievents-e41b4.appspot.com",
  messagingSenderId: "1092634923921",
  appId: "1:1092634923921:web:3b6feb7ff1ed203be84030",
  measurementId: "G-DJZTCDM2PM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Initialize Firebase Analytics
const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app); // Initialize Firebase Auth

export { app, db, auth, analytics };
