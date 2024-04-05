// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoGFaXT5Ei9BK6oQYu-OetiCnlcpGtvgA",
  authDomain: "lab1-ph42829.firebaseapp.com",
  projectId: "lab1-ph42829",
  storageBucket: "lab1-ph42829.appspot.com",
  messagingSenderId: "937181514498",
  appId: "1:937181514498:web:390a9c9619be6dc78fd01b",
  measurementId: "G-074SNTCEL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE = getFirestore(FIREBASE_APP);
export const DATABASE= getDatabase(FIREBASE_APP);
export const STORAGE = getStorage(FIREBASE_APP);