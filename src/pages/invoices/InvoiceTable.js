
function InvoiceTable({ invoices }) {

    const formatDate = (date) => {
        return new Intl.DateTimeFormat("es-MX", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        }).format(new Date(date));
    };

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

                <thead className="table-dark">
                <tr>
                    <th>Factura</th>
                    <th>Total</th>
                    <th>Fecha</th>
                    <th>Estatus</th>
                    <th>Activa</th>
                </tr>
                </thead>

                <tbody>
                {invoices.map((invoice) => (
                    <tr key={invoice.id}>

                        <td className="fw-semibold">
                            {invoice.invoice_number}
                        </td>

                        <td>
                            {new Intl.NumberFormat("es-MX", {
                                style: "currency",
                                currency: "MXN",
                            }).format(invoice.total)}
                        </td>

                        <td>
                            {formatDate(invoice.invoice_date)}
                        </td>

                        <td>
                                <span
                                    className={`badge ${getStatusBadge(
                                        invoice.status
                                    )}`}
                                >
                                    {invoice.status}
                                </span>
                        </td>

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