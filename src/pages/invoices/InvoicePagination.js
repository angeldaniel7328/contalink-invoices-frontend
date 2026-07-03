function InvoicePagination({ pagination, onPageChange }) {

    if (!pagination || pagination.total_pages <= 1) {
        return null;
    }

    return (
        <nav className="mt-4">
            <ul className="pagination justify-content-center">

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

                <li className="page-item disabled">
                    <span className="page-link">
                        Página {pagination.page} de {pagination.total_pages}
                    </span>
                </li>

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