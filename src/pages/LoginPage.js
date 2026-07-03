import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../services/authService";

/**
 * Página de autenticación de la aplicación.
 */
function LoginPage() {
    const navigate = useNavigate();

    // Estado que almacena el nombre de usuario.
    const [username, setUsername] = useState("");

    // Estado que almacena la contraseña.
    const [password, setPassword] = useState("");

    // Estado que indica si la autenticación está en proceso.
    const [loading, setLoading] = useState(false);

    // Estado que almacena el mensaje de error.
    const [error, setError] = useState("");

    /**
     * Autentica al usuario y redirige a la página principal.
     *
     * @param {Object} event Evento del formulario.
     */
    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        setError("");

        try {
            await login(username, password);

            navigate("/main", { replace: true });

            // Recarga la aplicación para actualizar los componentes
            // que dependen del estado de autenticación.
            window.location.reload();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                    <div className="card shadow">
                        <div className="card-body">

                            <h3 className="text-center mb-4">
                                Iniciar sesión
                            </h3>

                            {/* Muestra el mensaje de error cuando la autenticación falla */}
                            {error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>

                                {/* Campo de usuario */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Usuario
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={username}
                                        onChange={(event) =>
                                            setUsername(event.target.value)
                                        }
                                        required
                                    />
                                </div>

                                {/* Campo de contraseña */}
                                <div className="mb-4">
                                    <label className="form-label">
                                        Contraseña
                                    </label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                        required
                                    />
                                </div>

                                {/* Botón para iniciar sesión */}
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    disabled={loading}
                                >
                                    {loading
                                        ? "Autenticando..."
                                        : "Iniciar sesión"}
                                </button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;