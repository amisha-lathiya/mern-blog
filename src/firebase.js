// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {FIRE_BASE_API_KEY} from './config'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(FIRE_BASE_API_KEY)
const firebaseConfig = {
  // apiKey:process.env.FIRE_BASE_API_KEY,
  apiKey:FIRE_BASE_API_KEY,
  authDomain: "mern-blog-f0ecf.firebaseapp.com",
  projectId: "mern-blog-f0ecf",
  storageBucket: "mern-blog-f0ecf.appspot.com",
  messagingSenderId: "583525779897",
  appId: "1:583525779897:web:454be627a492d800144e68"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);