import { Link } from "react-router-dom";

function MainPage() {
    return (
        <div className="container mt-4">
            <div className="p-5 mb-4 bg-light rounded-3 border">
                <div className="container-fluid py-3">
                    <h1 className="display-5 fw-bold">
                        Contalink Invoices
                    </h1>

                    <p className="col-md-8 fs-5">
                        Bienvenido al sistema de consulta de facturas.
                        Desde aquí podrás consultar las facturas registradas
                        utilizando filtros por rango de fechas y paginación.
                    </p>

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