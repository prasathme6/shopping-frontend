// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Ebd0mscMFOE_SGq7CVjIiLO_TN7EWEE",
  authDomain: "pentagon-project-2efb3.firebaseapp.com",
  projectId: "pentagon-project-2efb3",
  storageBucket: "pentagon-project-2efb3.firebasestorage.app",
  messagingSenderId: "930478387201",
  appId: "1:930478387201:web:8ec0d5e6ab1a355e12d000"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let _auth = getAuth(app);