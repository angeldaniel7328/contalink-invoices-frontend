import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import AppRoutes from "./routes";

import { isAuthenticated } from "./utils/authStorage";

/**
 * Componente principal de la aplicación.
 *
 * Define la estructura general de la interfaz, mostrando el encabezado
 * y el pie de página únicamente cuando el usuario se encuentra autenticado.
 */
function App() {
    return (
        <div className="d-flex flex-column min-vh-100">

            {/* Barra de navegación */}
            {isAuthenticated() && <NavBar />}

            {/* Contenido principal de la aplicación */}
            <main className="container flex-grow-1 py-4">
                <AppRoutes />
            </main>

            {/* Pie de página */}
            {isAuthenticated() && <Footer />}

        </div>
    );
}

export default App;