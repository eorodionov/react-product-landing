import React, { useRef, useState } from 'react';
import './App.css';

//firebase sdk import
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

firebase.initializeApp({
  apiKey: "AIzaSyCq_GFsIyXakTV-wPa-wOLNQ7cv6dmjtKY",
  authDomain: "react-product-landing.firebaseapp.com",
  projectId: "react-product-landing",
  storageBucket: "react-product-landing.appspot.com",
  messagingSenderId: "1020608079682",
  appId: "1:1020608079682:web:f134583ad127dfe7bb4adb"


})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();



function App() {
  return (
    <div className="App">

    </div>
    
  );
}

export default App;
