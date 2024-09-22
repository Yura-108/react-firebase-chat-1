import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "react-chat-fc3fe.firebaseapp.com",
    projectId: "react-chat-fc3fe",
    storageBucket: "react-chat-fc3fe.appspot.com",
    messagingSenderId: "560034530800",
    appId: "1:560034530800:web:b7ce8534c267e1964fc935"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()