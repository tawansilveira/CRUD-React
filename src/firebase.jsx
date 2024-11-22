import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBgoku2C0gY2bSo2pb3b2WkC4QzRuz5Hgg",

    authDomain: "as-daoc.firebaseapp.com",
  
    projectId: "as-daoc",
  
    storageBucket: "as-daoc.firebasestorage.app",
  
    messagingSenderId: "831092012445",
  
    appId: "1:831092012445:web:02e7c3de6e3cee3886eb74"
  
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
