import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import { isAuthenticated } from "./utils/authStorage";

import AppRoutes from "./routes";

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            {isAuthenticated() && <NavBar />}

            <main className="container flex-grow-1 py-4">
                <AppRoutes />
            </main>

            {isAuthenticated() && <Footer />}
        </div>
    );
}

export default App;