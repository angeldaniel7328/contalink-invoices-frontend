import { Navigate, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import InvoiceListPage from "./pages/invoices/InvoiceListPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

function AppRoutes() {
    const isAuthenticated = !!sessionStorage.getItem("token");

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Navigate
                        to={isAuthenticated ? "/main" : "/login"}
                        replace
                    />
                }
            />

            <Route
                path="/login"
                element={
                    isAuthenticated
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
                        to={isAuthenticated ? "/main" : "/login"}
                        replace
                    />
                }
            />
        </Routes>
    );
}

export default AppRoutes;