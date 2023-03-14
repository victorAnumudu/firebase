// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsfslwOe5aTQ4xY-VTnkd4H4lTRmqbspw",
    authDomain: "translator-488ec.firebaseapp.com",
    projectId: "translator-488ec",
    storageBucket: "translator-488ec.appspot.com",
    messagingSenderId: "189762794791",
    appId: "1:189762794791:web:fcc3373d3408d599aa2502"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()