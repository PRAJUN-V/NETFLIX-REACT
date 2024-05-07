// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfiOOnr5yLZtqghGfM38HDXjrEMqsOnu4",
  authDomain: "netflix-react-a8364.firebaseapp.com",
  projectId: "netflix-react-a8364",
  storageBucket: "netflix-react-a8364.appspot.com",
  messagingSenderId: "628467487202",
  appId: "1:628467487202:web:fa3e5688c1778387f7e9bb",
  measurementId: "G-JV895608TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);