import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCtGyuH3IZQ9KyxUSqxvR-YDlgg0yIFkDI",
  authDomain: "composerkeep.firebaseapp.com",
  projectId: "composerkeep",
  storageBucket: "composerkeep.appspot.com",
  messagingSenderId: "115385203012",
  appId: "1:115385203012:web:3c4cb94f9e5ab4e1857f11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
