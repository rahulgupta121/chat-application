import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyCnCRilK73zHa1ehxsVfk6QpAN0lo8srRI",
    authDomain: "slack-chat-app-1ea65.firebaseapp.com",
    projectId: "slack-chat-app-1ea65",
    storageBucket: "slack-chat-app-1ea65.appspot.com",
    messagingSenderId: "586622931381",
    appId: "1:586622931381:web:d207954469c0429cecc9fc",
    measurementId: "G-1KEFD60HQ1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export defalut firebase;
