// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRHnoM78XKKMBft3WhIKP-pTFnNueirfk",
  authDomain: "netflixgpt-52705.firebaseapp.com",
  projectId: "netflixgpt-52705",
  storageBucket: "netflixgpt-52705.firebasestorage.app",
  messagingSenderId: "457330655892",
  appId: "1:457330655892:web:1b60344f14b1afc55a2a81",
  measurementId: "G-7END3L4LDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();