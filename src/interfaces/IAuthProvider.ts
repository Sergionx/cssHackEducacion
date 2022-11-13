import { UserCredential } from "@firebase/auth";
import { User } from "./models/User";

export interface IAuthProvider {
    user: User | null;
    signup: (name:string, email: string, password: string, professor: boolean) => void;
    login: (email: string, password: string) => Promise<UserCredential> | Promise<null>;
    logout: () => Promise<void> | Promise<null>; 
    resetPassword: (email: string) => Promise<void> | Promise<null>;
    loading: boolean;
}