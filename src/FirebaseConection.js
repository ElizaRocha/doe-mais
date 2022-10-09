import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC5qb1N8JOiypRRc_J4YOk4ctKSCH_sFPw",
    authDomain: "curso-1ec67.firebaseapp.com",
    projectId: "curso-1ec67",
    storageBucket: "curso-1ec67.appspot.com",
    messagingSenderId: "1060318721824",
    appId: "1:1060318721824:web:a74d599d782727e8f58945",
    measurementId: "G-PD9RBBW7PK"
  };

  // Initialize Firebase
 if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
 }
    


  export default firebase