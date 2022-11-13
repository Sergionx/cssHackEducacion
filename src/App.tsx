import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";
import Error404 from "./pages/Error404";
import UserLayout from "./layouts/UserLayout";
import { AuthProvider } from "./context/authContext";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/user" element={<UserLayout />}>
                        <Route index element={<Login />} />
                        <Route path="registrar" element={<Register />} />
                        {/* <Route
                        path="olvide-password"
                        element={<ForgotPassword />}
                    />
                    <Route
                        path="olvide-password/:token"
                        element={<NewPassword />}
                    />
                    <Route path="confirmar/:id" element={<ConfirmAccount />} /> */}
                        <Route path="*" element={<Error404 />} /> //TODO - Crear
                        una pagina de error 404
                    </Route>

                    {/* <Route path="/cursos" element={<RutaProtegida />}>
                    <Route index element={<Shop />} />
                    <Route path="crear-producto" element={<NewProduct />} />
                    <Route path=":id" element={<ProductDetails />} />
                    <Route path="*" element={<Error404 />} /> //TODO - Crear una
                    pagina de error 404
                </Route> */}

                    <Route path="*" element={<Error404 />}></Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
