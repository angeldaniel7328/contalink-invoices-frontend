import { useEffect, useState } from "react";

import InvoiceFilters from "./InvoiceFilters";
import InvoicePagination from "./InvoicePagination";
import InvoiceTable from "./InvoiceTable";

import Loading from "../../components/Loading";

import { getInvoices } from "../../services/invoiceService";

/**
 * Página principal para la consulta de facturas.
 */
function InvoiceListPage() {
    // Estado que almacena los filtros de búsqueda.
    const [filters, setFilters] = useState({
        start_date: "",
        end_date: "",
        page: 1,
        page_size: 10,
    });

    // Estado que almacena las facturas obtenidas de la API.
    const [invoices, setInvoices] = useState([]);

    // Estado que almacena la información de paginación.
    const [pagination, setPagination] = useState(null);

    // Estado que indica si existe una petición en proceso.
    const [loading, setLoading] = useState(false);

    // Estado que almacena el mensaje de error.
    const [error, setError] = useState("");

    /**
     * Inicializa el rango de fechas con el año actual.
     */
    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();

        setFilters((previous) => ({
            ...previous,
            start_date: `${year}-01-01`,
            end_date: `${year}-12-31`,
        }));
    }, []);

    /**
     * Consulta las facturas cada vez que cambia alguno de los filtros.
     */
    useEffect(() => {
        // Evita realizar la consulta mientras no existan ambas fechas.
        if (!filters.start_date || !filters.end_date) {
            return;
        }

        /**
         * Obtiene las facturas desde la API.
         */
        const fetchInvoices = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await getInvoices(filters);

                setInvoices(response.items);
                setPagination(response);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchInvoices();
    }, [filters]);

    /**
     * Reinicia la paginación y ejecuta una nueva búsqueda.
     */
    const handleSearch = () => {
        setFilters((previous) => ({
            ...previous,
            page: 1,
        }));
    };

    /**
     * Actualiza la página seleccionada.
     *
     * @param {number} page Número de página.
     */
    const handlePageChange = (page) => {
        setFilters((previous) => ({
            ...previous,
            page,
        }));
    };

    return (
        <div>
            <h2 className="mb-4">
                Consulta de facturas
            </h2>

            <InvoiceFilters
                filters={filters}
                setFilters={setFilters}
                onSearch={handleSearch}
            />

            {/* Muestra el mensaje de error en caso de existir */}
            {error && (
                <div className="alert alert-danger mt-3">
                    {error}
                </div>
            )}

            {/* Muestra un indicador de carga mientras se consulta la API */}
            {loading ? (
                <Loading />
            ) : (
                <>
                    <InvoiceTable invoices={invoices} />

                    <InvoicePagination
                        pagination={pagination}
                        onPageChange={handlePageChange}
                    />
                </>
            )}
        </div>
    );
}

export default InvoiceListPage;