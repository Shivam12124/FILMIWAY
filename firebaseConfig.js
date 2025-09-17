// firebaseConfig.js - NEXT.JS COMPATIBLE VERSION
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7MIH4jPi6uFaN4mG4oAq2HTKpIOVxTF8",
  authDomain: "filmiway-d5a2b.firebaseapp.com",
  projectId: "filmiway-d5a2b",
  storageBucket: "filmiway-d5a2b.firebasestorage.app",
  messagingSenderId: "1042070525553",
  appId: "1:1042070525553:web:3abb4a321e038e19362dd0",
  measurementId: "G-EDS2VZ5HP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only on client side (browser)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firestore and Auth (these work on server-side)
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, analytics };
export default app;
