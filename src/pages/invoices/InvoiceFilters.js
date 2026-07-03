/**
 * Componente que muestra los filtros de búsqueda para la consulta de facturas.
 *
 * @param {Object} props Propiedades del componente.
 * @param {Object} props.filters Filtros actuales de búsqueda.
 * @param {Function} props.setFilters Función para actualizar los filtros.
 * @param {Function} props.onSearch Función que ejecuta la búsqueda.
 */
function InvoiceFilters({ filters, setFilters, onSearch }) {

    /**
     * Actualiza el valor del filtro modificado por el usuario.
     *
     * @param {Object} event Evento del componente.
     */
    const handleChange = ({ target }) => {
        setFilters((previous) => ({
            ...previous,
            [target.name]: target.value,
        }));
    };

    return (
        <div className="card mb-4">
            <div className="card-body">
                <div className="row">

                    {/* Fecha inicial */}
                    <div className="col-md-3">
                        <label className="form-label">
                            Fecha inicial
                        </label>

                        <input
                            type="date"
                            name="start_date"
                            className="form-control"
                            value={filters.start_date}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Fecha final */}
                    <div className="col-md-3">
                        <label className="form-label">
                            Fecha final
                        </label>

                        <input
                            type="date"
                            name="end_date"
                            className="form-control"
                            value={filters.end_date}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Cantidad de registros por página */}
                    <div className="col-md-2">
                        <label className="form-label">
                            Registros
                        </label>

                        <select
                            name="page_size"
                            className="form-select"
                            value={filters.page_size}
                            onChange={handleChange}
                        >
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </div>

                    {/* Botón para ejecutar la búsqueda */}
                    <div className="col-md-2 d-flex align-items-end">
                        <button
                            className="btn btn-primary w-100"
                            onClick={onSearch}
                        >
                            Buscar
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default InvoiceFilters;