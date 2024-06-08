// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFriuLkNZf459CdpKg0Na2ucmdXB2Xvoc",
  authDomain: "project-management-system-49.firebaseapp.com",
  projectId: "project-management-system-49",
  storageBucket: "project-management-system-49.appspot.com",
  messagingSenderId: "447079149464",
  appId: "1:447079149464:web:aa83873427b3c6d16545ed",
  measurementId: "G-YLX3X04372",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
