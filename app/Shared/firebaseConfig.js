// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYiLOJo_NDNuX6CMoqhym5ErCy4cDdN2Q",
  authDomain: "pinterest-a3954.firebaseapp.com",
  projectId: "pinterest-a3954",
  storageBucket: "pinterest-a3954.appspot.com",
  messagingSenderId: "962680313322",
  appId: "1:962680313322:web:616e350de99366a22a8e93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
 
export const provider = new GoogleAuthProvider()




export default app