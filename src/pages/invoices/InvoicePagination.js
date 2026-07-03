/**
 * Componente que muestra los controles de paginación para la consulta de
 * facturas.
 *
 * @param {Object} props Propiedades del componente.
 * @param {Object} props.pagination Información de la paginación.
 * @param {Function} props.onPageChange Función que cambia la página actual.
 */
function InvoicePagination({ pagination, onPageChange }) {

    // No muestra el componente cuando no existe información de paginación
    // o únicamente existe una página de resultados.
    if (!pagination || pagination.total_pages <= 1) {
        return null;
    }

    return (
        <nav className="mt-4">
            <ul className="pagination justify-content-center">

                {/* Botón para navegar a la página anterior */}
                <li
                    className={`page-item ${
                        pagination.page === 1 ? "disabled" : ""
                    }`}
                >
                    <button
                        className="page-link"
                        onClick={() => onPageChange(pagination.page - 1)}
                    >
                        Anterior
                    </button>
                </li>

                {/* Información de la página actual */}
                <li className="page-item disabled">
                    <span className="page-link">
                        Página {pagination.page} de {pagination.total_pages}
                    </span>
                </li>

                {/* Botón para navegar a la siguiente página */}
                <li
                    className={`page-item ${
                        pagination.page === pagination.total_pages
                            ? "disabled"
                            : ""
                    }`}
                >
                    <button
                        className="page-link"
                        onClick={() => onPageChange(pagination.page + 1)}
                    >
                        Siguiente
                    </button>
                </li>

            </ul>
        </nav>
    );
}

export default InvoicePagination;