import { Navigate, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import InvoiceListPage from "./pages/invoices/InvoiceListPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

import { isAuthenticated } from "./utils/authStorage";

function AppRoutes() {
    const authenticated = isAuthenticated();

    return (
        <Routes>

            <Route
                path="/"
                element={
                    <Navigate
                        to={authenticated ? "/main" : "/login"}
                        replace
                    />
                }
            />

            <Route
                path="/login"
                element={
                    authenticated
                        ? <Navigate to="/main" replace />
                        : <LoginPage />
                }
            />

            <Route
                path="/main"
                element={
                    <ProtectedRoute>
                        <MainPage />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/invoices"
                element={
                    <ProtectedRoute>
                        <InvoiceListPage />
                    </ProtectedRoute>
                }
            />

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