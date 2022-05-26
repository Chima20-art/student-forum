// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyA5D664fvVTpUj1sE14KlGTdW9zR17LYKw",
  authDomain: "studentforum-f11ce.firebaseapp.com",
  databaseURL: "https://studentforum-f11ce-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "studentforum-f11ce",
  storageBucket: "studentforum-f11ce.appspot.com",
  messagingSenderId: "151008315192",
  appId: "1:151008315192:web:a40d9a78f8cdab117da3cd",
  measurementId: "G-BKZQF2BXXR"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig) ;
const db = getFirestore(app);
const storage = getStorage(app);


export {app,db,storage}