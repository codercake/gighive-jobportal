// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB94f9VF6vXip-I0hwbMnbIGYOkEqX9a_E",
  authDomain: "gighive-jobportal.firebaseapp.com",
  projectId: "gighive-jobportal",
  storageBucket: "gighive-jobportal.appspot.com",
  messagingSenderId: "100371188056",
  appId: "1:100371188056:web:e47e05ec58cbb1bc02fd2d",
  measurementId: "G-0GVVG0J58F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and the Google provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Export auth and googleProvider
export { auth, googleProvider };
