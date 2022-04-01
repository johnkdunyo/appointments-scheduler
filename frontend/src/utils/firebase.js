// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import  { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnmxwBePhEYuxqWLa99YUXxlZg2T-mQpM",
  authDomain: "appointments-scheduler-2022.firebaseapp.com",
  projectId: "appointments-scheduler-2022",
  storageBucket: "appointments-scheduler-2022.appspot.com",
  messagingSenderId: "563281385391",
  appId: "1:563281385391:web:088a37d544dbf96446415a",
  measurementId: "G-KFCJXJC98R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);