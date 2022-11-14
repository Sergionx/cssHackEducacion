import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Header() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    function logOut() {
        logout();
        navigate("/user");
    }

    return (
        <header className="px-4 py-5 bg-white border-b">
            <div className="md:flex md:justify-between">
                <h2 className="text-3xl text-center text-blue-400 font-black">
                    Interact-Cursos
                </h2>

                <input
                    type="search"
                    placeholder="Buscar Curso"
                    className="rounded-lg lg:w-96 block p-2 border"
                />

                <div className="flex items-center gap-4">
                    <Link to="/" className="font-bold">
                        Interact-Cursos
                    </Link>
                    <button
                        type="button"
                        className="text-white text-sm bg-blue-700 p-3
                            rounded-md font-bold"
                        onClick={logOut}
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
