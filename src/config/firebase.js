// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB7MIH4jPi6uFaN4mG4oAq2HTKpIOVxTF8",
  authDomain: "filmiway-d5a2b.firebaseapp.com",
  projectId: "filmiway-d5a2b",
  storageBucket: "filmiway-d5a2b.firebasestorage.app",
  messagingSenderId: "1042070525553",
  appId: "1:1042070525553:web:3abb4a321e038e19362dd0",
  measurementId: "G-EDS2VZ5HP1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
