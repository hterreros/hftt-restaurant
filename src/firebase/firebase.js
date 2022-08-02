// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPr-_PR-MRdIpCjqO28wLzY4_Jw_33JwE",
  authDomain: "restaurant-hftt-app.firebaseapp.com",
  projectId: "restaurant-hftt-app",
  storageBucket: "restaurant-hftt-app.appspot.com",
  messagingSenderId: "904521737860",
  appId: "1:904521737860:web:47d60f3451fabea84444d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)