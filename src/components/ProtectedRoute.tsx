import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Header from "./Header";

export function ProtectedRoute({ children }: any) {
    const { user, loading } = useAuth();

    if (!user) return <Navigate to="/user" />;

    return (
        <>
            <div className="bg-blue-50">
                <Header />
                <div className="md:flex md:min-h">
                    <main className="p-3 flex-1 ">{children}</main>
                </div>
            </div>
        </>
    );
}
