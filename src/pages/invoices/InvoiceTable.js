/**
 * Componente que muestra la tabla de facturas obtenidas de la API.
 *
 * @param {Object} props Propiedades del componente.
 * @param {Array} props.invoices Lista de facturas a mostrar.
 */
function InvoiceTable({ invoices }) {

    /**
     * Formatea una fecha al formato dd/MM/yyyy HH:mm.
     *
     * @param {string} date Fecha a formatear.
     * @returns {string} Fecha con formato legible.
     */
    const formatDate = (date) => {
        return new Intl.DateTimeFormat("es-MX", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        }).format(new Date(date));
    };

    /**
     * Obtiene la clase Bootstrap correspondiente al estatus de la factura.
     *
     * @param {string} status Estatus de la factura.
     * @returns {string} Clase CSS del badge.
     */
    const getStatusBadge = (status) => {
        switch (status.toLowerCase()) {
            case "vigente":
                return "bg-success";

            case "cancelado":
                return "bg-danger";

            case "pendiente":
                return "bg-warning text-dark";

            default:
                return "bg-secondary";
        }
    };

    // Muestra un mensaje cuando la consulta no devuelve resultados.
    if (!invoices.length) {
        return (
            <div className="alert alert-info">
                No se encontraron facturas.
            </div>
        );
    }

    return (
        <div className="table-responsive">
            <table className="table table-hover align-middle">

                {/* Encabezado de la tabla */}
                <thead className="table-dark">
                <tr>
                    <th>Factura</th>
                    <th>Total</th>
                    <th>Fecha</th>
                    <th>Estatus</th>
                    <th>Activa</th>
                </tr>
                </thead>

                {/* Cuerpo de la tabla */}
                <tbody>
                {invoices.map((invoice) => (
                    <tr key={invoice.id}>

                        {/* Número de factura */}
                        <td className="fw-semibold">
                            {invoice.invoice_number}
                        </td>

                        {/* Importe total */}
                        <td>
                            {new Intl.NumberFormat("es-MX", {
                                style: "currency",
                                currency: "MXN",
                            }).format(invoice.total)}
                        </td>

                        {/* Fecha de la factura */}
                        <td>
                            {formatDate(invoice.invoice_date)}
                        </td>

                        {/* Estatus de la factura */}
                        <td>
                                <span
                                    className={`badge ${getStatusBadge(
                                        invoice.status
                                    )}`}
                                >
                                    {invoice.status}
                                </span>
                        </td>

                        {/* Indica si la factura se encuentra activa */}
                        <td>
                            {invoice.active ? (
                                <span className="badge bg-success">
                                        ✓ Activa
                                    </span>
                            ) : (
                                <span className="badge bg-secondary">
                                        ✕ Inactiva
                                    </span>
                            )}
                        </td>

                    </tr>
                ))}
                </tbody>

            </table>
        </div>
    );
}

export default InvoiceTable;