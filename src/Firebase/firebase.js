// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl6Yf3zABLxeuGtTYhGlj0XSWYyw56zUo",
  authDomain: "react-firebase-fff2c.firebaseapp.com",
  projectId: "react-firebase-fff2c",
  storageBucket: "react-firebase-fff2c.appspot.com",
  messagingSenderId: "1092509187890",
  appId: "1:1092509187890:web:05c767b82157475c20a12b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
