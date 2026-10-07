/**
 * Firebase Configuration
 * Initializes Firebase app, Auth, and Firestore instances.
 * All other services import from here.
 */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqEP5vOFJawuxx5FPI26CEtzQ3IDvR710",
  authDomain: "breaktime-cafe.firebaseapp.com",
  projectId: "breaktime-cafe",
  storageBucket: "breaktime-cafe.firebasestorage.app",
  messagingSenderId: "711683016146",
  appId: "1:711683016146:web:a0af52d734a7a25df6f40b",
  measurementId: "G-8B36LPPLZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Cloud Firestore
export const db = getFirestore(app);

export default app;
