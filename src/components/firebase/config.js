  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import 'firebase/firestore';
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA_0zHDVQv8qQpypFm1JyS5ARxfBykvCl8",
    authDomain: "job-listing-52429.firebaseapp.com",
    projectId: "job-listing-52429",
    storageBucket: "job-listing-52429.appspot.com",
    messagingSenderId: "94482240612",
    appId: "1:94482240612:web:291d9437f88c46618c3b71"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const firestore = app.firestore();

  export { app, firestore };