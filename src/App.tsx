import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";
import Error404 from "./pages/Error404";
import UserLayout from "./layouts/UserLayout";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/user" element={<UserLayout />}>
                        <Route index element={<Login />} />
                        <Route path="registrar" element={<Register />} />
                        <Route path="*" element={<Error404 />} />
                    </Route>

                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Error404 />
                            </ProtectedRoute>
                        }
                    />

                    <Route path="*" element={<Error404 />}></Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
