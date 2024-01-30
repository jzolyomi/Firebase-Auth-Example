// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth"; //Needed for Google Account authentication
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Change this to your Firebase App configuration!!
const firebaseConfig = {
  apiKey: "AIzaSyBx0CtWqBPh75CdEKjCU_aQ0tusGVWfKg4",
  authDomain: "fir-auth-example-57277.firebaseapp.com",
  projectId: "fir-auth-example-57277",
  storageBucket: "fir-auth-example-57277.appspot.com",
  messagingSenderId: "450964619348",
  appId: "1:450964619348:web:936afbc1d58299515c2dc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//Export Google Auth as Provider (Need to enable it in the Firebase Dahsboard!)
export const provider = new GoogleAuthProvider();