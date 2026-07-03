import { Link, useNavigate } from "react-router-dom";

import { logout } from "../utils/authStorage";

/**
 * Barra de navegación principal de la aplicación.
 */
function NavBar() {
    const navigate = useNavigate();

    /**
     * Cierra la sesión del usuario y redirige al inicio de sesión.
     */
    const handleLogout = () => {
        logout();

        navigate("/login", { replace: true });

        // Recarga la aplicación para actualizar los componentes que
        // dependen del estado de autenticación.
        window.location.reload();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                {/* Nombre de la aplicación */}
                <Link className="navbar-brand" to="/main">
                    Contalink Invoices
                </Link>

                {/* Botón para dispositivos móviles */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Opciones de navegación */}
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav me-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/main">
                                Inicio
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/invoices">
                                Facturas
                            </Link>
                        </li>

                    </ul>

                    {/* Botón para cerrar sesión */}
                    <button
                        className="btn btn-outline-light"
                        onClick={handleLogout}
                    >
                        Cerrar sesión
                    </button>

                </div>
            </div>
        </nav>
    );
}

export default NavBar;