import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD9WXawCAoqkRErZz1XRG9ZVc6HEdx4mU4",
    authDomain: "ccshackeducacion.firebaseapp.com",
    projectId: "ccshackeducacion",
    storageBucket: "ccshackeducacion.appspot.com",
    messagingSenderId: "704965919881",
    appId: "1:704965919881:web:80f27563640e9df725f258"
};


const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const auth = getAuth(app);