// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhu2mkVaQWfp1kyvHoi_AoQdeNnIAY_7M",
  authDomain: "final-year-project-70863.firebaseapp.com",
  projectId: "final-year-project-70863",
  storageBucket: "final-year-project-70863.appspot.com",
  messagingSenderId: "225829104859",
  appId: "1:225829104859:web:b2e7389bca20ec049e70fe",
  measurementId: "G-MKLMJFG35T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
