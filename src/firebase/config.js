// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD95mkzqlt_Jhq0ftiwFzHUw6iZ14UQr8",
  authDomain: "mi-app-abda0.firebaseapp.com",
  projectId: "mi-app-abda0",
  storageBucket: "mi-app-abda0.appspot.com",
  messagingSenderId: "888291574328",
  appId: "1:888291574328:web:abe49714dd51a25ba95ccd",
  measurementId: "G-MKX9J2JK6S",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
