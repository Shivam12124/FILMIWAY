// firebaseConfig.js or lib/firebase.js
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB7MIH4jPi6uFaN4mG4oAq2HTKpIOVxTF8",
  authDomain: "filmiway-d5a2b.firebaseapp.com",
  projectId: "filmiway-d5a2b",
  storageBucket: "filmiway-d5a2b.firebasestorage.app",
  messagingSenderId: "1042070525553",
  appId: "1:1042070525553:web:3abb4a321e038e19362dd0",
  measurementId: "G-EDS2VZ5HP1"
};

// Initialize Firebase only once
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export { app };
