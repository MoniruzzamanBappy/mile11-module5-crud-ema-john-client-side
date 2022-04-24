// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt3mcubCc1blog92MRLcUD6i0M46MZP0s",
  authDomain: "ema-jhon-private-route-72d2c.firebaseapp.com",
  projectId: "ema-jhon-private-route-72d2c",
  storageBucket: "ema-jhon-private-route-72d2c.appspot.com",
  messagingSenderId: "210409847978",
  appId: "1:210409847978:web:bf9ba52de99fce5ef864d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;