import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyD9WXawCAoqkRErZz1XRG9ZVc6HEdx4mU4",
    authDomain: "ccshackeducacion.firebaseapp.com",
    projectId: "ccshackeducacion",
    storageBucket: "ccshackeducacion.appspot.com",
    messagingSenderId: "704965919881",
    appId: "1:704965919881:web:80f27563640e9df725f258"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };