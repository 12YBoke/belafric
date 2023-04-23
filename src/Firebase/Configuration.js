// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1J6mZ_0DGNS4qz8ifcZWA2D0L2KVlXE4",
  authDomain: "belafric-villagekongo.firebaseapp.com",
  projectId: "belafric-villagekongo",
  storageBucket: "belafric-villagekongo.appspot.com",
  messagingSenderId: "1031382313809",
  appId: "1:1031382313809:web:7bb23043546cf0b9c4c170",
  measurementId: "G-GX71Q4JKLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);