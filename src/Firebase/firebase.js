// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMh1L1fbh3uRyFHwqvBF3PCa4oXK7-88c",
  authDomain: "e-commerce-16692.firebaseapp.com",
  projectId: "e-commerce-16692",
  storageBucket: "e-commerce-16692.appspot.com",
  messagingSenderId: "663815991475",
  appId: "1:663815991475:web:ab20e0bb51d626482d40c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
