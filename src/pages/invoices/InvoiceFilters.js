function InvoiceFilters({ filters, setFilters, onSearch }) {

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