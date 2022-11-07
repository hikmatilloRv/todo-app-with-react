// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZhFkOzvQAB2bd_ORu4JNSN3ucDckKoX8",
  authDomain: "todo-app-hk.firebaseapp.com",
  projectId: "todo-app-hk",
  storageBucket: "todo-app-hk.appspot.com",
  messagingSenderId: "991911955299",
  appId: "1:991911955299:web:3d748ed722d5936501e156"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)