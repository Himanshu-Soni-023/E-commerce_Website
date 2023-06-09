import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage ";

// Your web app's Firebase configuration

export const firebaseConfig = {
  apiKey: "AIzaSyCtj68qaatPuqe3nwconQmWDcVT-lM5oik",
  authDomain: "eshop-c16ba.firebaseapp.com",
  projectId: "eshop-c16ba",
  storageBucket: "eshop-c16ba.appspot.com",
  messagingSenderId: "699672460385",
  appId: "1:699672460385:web:dd721736787039c6cdbe20",
  measurementId: "G-29RJRVE2CF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const Storage = getStorage(app);

export default app;
