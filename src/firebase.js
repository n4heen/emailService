// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAItdJ5vbLwEcd9_p6IxgFHkrbBigdriP4",
  authDomain: "email-service-d5ebf.firebaseapp.com",
  projectId: "email-service-d5ebf",
  storageBucket: "email-service-d5ebf.appspot.com",
  messagingSenderId: "409542300069",
  appId: "1:409542300069:web:ccdd026a2a92a0f146584c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth();
const db = getFirestore();


export { db, auth };