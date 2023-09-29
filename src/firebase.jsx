// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFKV54B51XSlJkVkwp6lf2-KnnFb2DvGQ",
  authDomain: "module-51.firebaseapp.com",
  projectId: "module-51",
  storageBucket: "module-51.appspot.com",
  messagingSenderId: "185026372123",
  appId: "1:185026372123:web:16bf3eda1de9e70bfb4ebe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;