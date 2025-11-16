// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdbarGUjiJnI2_GpTa_TH-fNfXKpZAcA8",
  authDomain: "blogging-app-20769.firebaseapp.com",
  projectId: "blogging-app-20769",
  storageBucket: "blogging-app-20769.firebasestorage.app",
  messagingSenderId: "166024292312",
  appId: "1:166024292312:web:72dee75858775eff5df4ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export {db};