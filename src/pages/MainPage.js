import { Link } from "react-router-dom";

/**
 * Página principal de la aplicación.
 */
function MainPage() {
    return (
        <div className="container mt-4">

            {/* Tarjeta de bienvenida */}
            <div className="p-5 mb-4 bg-light rounded-3 border">
                <div className="container-fluid py-3">

                    <h1 className="display-5 fw-bold">
                        Contalink Invoices
                    </h1>

                    <p className="col-md-8 fs-5">
                        Bienvenido al sistema de consulta de facturas.
                        Desde esta sección podrás consultar las facturas
                        registradas utilizando filtros por rango de fechas y
                        paginación.
                    </p>

                    {/* Acceso a la consulta de facturas */}
                    <Link
                        to="/invoices"
                        className="btn btn-primary btn-lg"
                    >
                        Consultar facturas
                    </Link>

                </div>
            </div>

        </div>
    );
}

export default MainPage;