import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzmOFMrpEA3zr2cXqB0sUhknM_K8C0r0U",
  authDomain: "chat-b8274.firebaseapp.com",
  projectId: "chat-b8274",
  storageBucket: "chat-b8274.appspot.com",
  messagingSenderId: "575659418065",
  appId: "1:575659418065:web:c4c49f71a3fed13b22c0f0"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
