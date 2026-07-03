import { Navigate, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import InvoiceListPage from "./pages/invoices/InvoiceListPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

import { isAuthenticated } from "./utils/authStorage";

/**
 * Define las rutas de navegación de la aplicación.
 */
function AppRoutes() {
    // Indica si el usuario se encuentra autenticado.
    const authenticated = isAuthenticated();

    return (
        <Routes>

            {/* Redirección a la página correspondiente según el estado de autenticación */}
            <Route
                path="/"
                element={
                    <Navigate
                        to={authenticated ? "/main" : "/login"}
                        replace
                    />
                }
            />

            {/* Página de inicio de sesión */}
            <Route
                path="/login"
                element={
                    authenticated
                        ? <Navigate to="/main" replace />
                        : <LoginPage />
                }
            />

            {/* Página principal */}
            <Route
                path="/main"
                element={
                    <ProtectedRoute>
                        <MainPage />
                    </ProtectedRoute>
                }
            />

            {/* Consulta de facturas */}
            <Route
                path="/invoices"
                element={
                    <ProtectedRoute>
                        <InvoiceListPage />
                    </ProtectedRoute>
                }
            />

            {/* Redirección para rutas no existentes */}
            <Route
                path="*"
                element={
                    <Navigate
                        to={authenticated ? "/main" : "/login"}
                        replace
                    />
                }
            />

        </Routes>
    );
}

export default AppRoutes;