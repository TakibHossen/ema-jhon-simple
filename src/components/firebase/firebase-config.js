// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCERO8AQcyqFZrSb1g8U3vpzIN_BOkppaQ",
  authDomain: "ema-simple-with-firebase-auth.firebaseapp.com",
  projectId: "ema-simple-with-firebase-auth",
  storageBucket: "ema-simple-with-firebase-auth.appspot.com",
  messagingSenderId: "246415062600",
  appId: "1:246415062600:web:72183a0515f74e4ab1ca7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;