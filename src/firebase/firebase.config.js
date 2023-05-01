// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgdEu5OzcawqXgbk8kFwJWUzFhjh7cyOA",
  authDomain: "food-recipe-a10.firebaseapp.com",
  projectId: "food-recipe-a10",
  storageBucket: "food-recipe-a10.appspot.com",
  messagingSenderId: "280065846093",
  appId: "1:280065846093:web:c86e819519225b0923a504"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;