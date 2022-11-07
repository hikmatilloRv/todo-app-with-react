// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  YOUR-API-KEY,
  authDomain: YOUR_AUTHDOMAIN,
  projectId: YOUR-PROJECTID,
  storageBucket: YOUR-STORAGEBUCKET,
  messagingSenderId: YOUR-MESSAGING=SENDER,
  appId: YOUR-APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
