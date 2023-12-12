// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw7FKRSfQcvXw-Y_h7w4A8NbsQ8Jda3Mk",
  authDomain: "my-lab-fr-prac.firebaseapp.com",
  projectId: "my-lab-fr-prac",
  storageBucket: "my-lab-fr-prac.appspot.com",
  messagingSenderId: "253328077065",
  appId: "1:253328077065:web:1140a9bed2b69aa12be3d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app