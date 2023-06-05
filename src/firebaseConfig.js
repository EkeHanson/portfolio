// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOfQiJnXCXZHd2gTda_SrLjWZPkDSFvR0",
  authDomain: "portfolio-221d1.firebaseapp.com",
  projectId: "portfolio-221d1",
  storageBucket: "portfolio-221d1.appspot.com",
  messagingSenderId: "386613379469",
  appId: "1:386613379469:web:c4e4644d28c149748e7dc4",
  measurementId: "G-Y9368SQWNE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);