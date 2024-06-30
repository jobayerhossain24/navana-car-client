// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

/* 
const firebaseConfig = {
  apiKey: "AIzaSyAk5RDgJra86Q8m-AicgK9JptV3Uo3z-OA",
  authDomain: "navana-car-doctor.firebaseapp.com",
  projectId: "navana-car-doctor",
  storageBucket: "navana-car-doctor.appspot.com",
  messagingSenderId: "595221633515",
  appId: "1:595221633515:web:0ba734ccdd94b7758c21ae",
};
*/
