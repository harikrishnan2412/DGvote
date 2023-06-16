import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDq1hX1pTWaA6BVI5f_opEop7lYQarcKIY",
  authDomain: "voteverse.firebaseapp.com",
  projectId: "voteverse",
  storageBucket: "voteverse.appspot.com",
  messagingSenderId: "757914852602",
  appId: "1:757914852602:web:84f702e2e663ebe443bd43"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
