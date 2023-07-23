import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDJaWifrfkBCQBOUbUMCAVMUORmqZ5sduw",
  authDomain: "react-chat-7a597.firebaseapp.com",
  projectId: "react-chat-7a597",
  storageBucket: "react-chat-7a597.appspot.com",
  messagingSenderId: "521810485998",
  appId: "1:521810485998:web:c6f3b96fe11b7e61d449ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();