import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

//  web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtk8IEp3BxpsTFgpliHxomJRXKgPxR4l8",
  authDomain: "cmecommerce-ae1b8.firebaseapp.com",
  projectId: "cmecommerce-ae1b8",
  storageBucket: "cmecommerce-ae1b8.appspot.com",
  messagingSenderId: "643832522039",
  appId: "1:643832522039:web:621fb893346dd32d37a6b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const login = async ({ email, password }) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
export const register = async ({ email, password }) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = async () => {
  return await signInWithPopup(auth, googleProvider);
};
