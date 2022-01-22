import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYD5iPSqm5Z51NB09KkIR5l5MMQm9lxTU",
  authDomain: "house-marketplace-app-1ac51.firebaseapp.com",
  projectId: "house-marketplace-app-1ac51",
  storageBucket: "house-marketplace-app-1ac51.appspot.com",
  messagingSenderId: "647605328168",
  appId: "1:647605328168:web:8c29f500278e321b22181d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
