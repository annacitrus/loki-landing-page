// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxWj1RkUsbeSDTpMOI8Ic7kI6aDQP71cA",
  authDomain: "loki-eae7b.firebaseapp.com",
  projectId: "loki-eae7b",
  storageBucket: "loki-eae7b.firebasestorage.app",
  messagingSenderId: "565581269905",
  appId: "1:565581269905:web:8dcd23ba1463b4f559e830",
  measurementId: "G-WLQCB2SWVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
