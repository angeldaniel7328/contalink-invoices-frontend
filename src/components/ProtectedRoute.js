import { Navigate } from "react-router-dom";

import { isAuthenticated } from "../utils/authStorage";

/**
 * Componente que protege las rutas que requieren autenticación.
 *
 * @param {Object} props Propiedades del componente.
 * @param {React.ReactNode} props.children Componentes hijos que se renderizan
 * únicamente cuando el usuario se encuentra autenticado.
 * @returns {JSX.Element} Componente protegido o redirección al inicio de sesión.
 */
function ProtectedRoute({ children }) {

    // Redirige al usuario a la página de inicio de sesión cuando no existe
    // un token de autenticación válido.
    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />;
    }

    // Renderiza el contenido protegido.
    return children;
}

export default ProtectedRoute;