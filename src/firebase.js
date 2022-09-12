// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJxKpL13uT8ZexVxQ5ZPKN-qargEOyHYI",
  authDomain: "instagram-clone-ffa36.firebaseapp.com",
  projectId: "instagram-clone-ffa36",
  storageBucket: "instagram-clone-ffa36.appspot.com",
  messagingSenderId: "993631246349",
  appId: "1:993631246349:web:9e523961f2828b0282dd44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore();
export { auth, provider, db };
