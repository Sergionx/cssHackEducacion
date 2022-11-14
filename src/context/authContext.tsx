import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { User } from "../interfaces/models/User";
import { IAuthProvider } from "../interfaces/IAuthProvider";
import { doc, getDoc, setDoc } from "firebase/firestore";

const authContext = createContext<IAuthProvider>({
    user: {
        name: "",
        email: "",
        professor: false,
    },
    signup: async (
        name: string,
        email: string,
        password: string,
        professor: boolean
    ) => {},
    login: async (email: string, password: string) => {
        return null;
    },
    logout: async () => {
        return null;
    },
    resetPassword: async (email: string) => {
        return null;
    },
    loading: true,
});

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("There is no Auth provider");
    return context;
};

export function AuthProvider({ children }: any) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const signup = (
        name: string,
        email: string,
        password: string,
        professor: boolean
    ) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user: User = {
                    name: name,
                    email: email,
                    professor: professor,
                };
                console.log('hola',userCredential.user.uid)
                setDoc(doc(db, "users", userCredential.user.uid), user);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => signOut(auth);

    const resetPassword = async (email: string) =>
        sendPasswordResetEmail(auth, email);

    useEffect(() => {
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
            const id = currentUser?.uid == undefined ? "" : currentUser?.uid;
            getDoc(doc(db, "users", id)).then((docSnap) => {
                if (docSnap.exists()) {
                    setUser(docSnap.data() as User);
                    setLoading(false);

                    console.log("Document data:", docSnap.data());
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            })
        });
        return () => unsubuscribe();
    }, []);

    const value: IAuthProvider = { user, signup, login, logout, resetPassword, loading };

    return (
        <authContext.Provider value={value}>{children}</authContext.Provider>
    );
}

export default authContext;
