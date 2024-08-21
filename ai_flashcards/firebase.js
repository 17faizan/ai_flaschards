// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEE4fk76Vikg6-vvBtSGTU1lZut2tOH9M",
  authDomain: "flashcardssaas-36194.firebaseapp.com",
  projectId: "flashcardssaas-36194",
  storageBucket: "flashcardssaas-36194.appspot.com",
  messagingSenderId: "1066125081024",
  appId: "1:1066125081024:web:135ca45562a3d33afe3025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}