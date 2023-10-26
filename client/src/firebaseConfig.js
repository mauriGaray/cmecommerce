import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

//  web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSANGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const register = async ({ email, password }) => {
  let userInfo = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).then((userFirebase) => {
    return userFirebase;
  });
  let data = {
    email,
    uid: userInfo.user.uid,
    role: "user",
  };
  let newUser = collection(db, "usuarios");
  addDoc(newUser, data);
};

//Login

export const loginWithGoogle = async () => {
  return await signInWithPopup(auth, googleProvider);
};
export const login = async ({ email, password }) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
