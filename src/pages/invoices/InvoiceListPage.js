import { useEffect, useState } from "react";

import InvoiceFilters from "./InvoiceFilters";
import InvoicePagination from "./InvoicePagination";
import InvoiceTable from "./InvoiceTable";

import Loading from "../../components/Loading";

import { getInvoices } from "../../services/invoiceService";

function InvoiceListPage() {
    const [filters, setFilters] = useState({
        start_date: "",
        end_date: "",
        page: 1,
        page_size: 10,
    });

    const [invoices, setInvoices] = useState([]);

    const [pagination, setPagination] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();

        setFilters((previous) => ({
            ...previous,
            start_date: `${year}-01-01`,
            end_date: `${year}-12-31`,
        }));
    }, []);

    useEffect(() => {
        if (!filters.start_date || !filters.end_date) {
            return;
        }

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

    const handleSearch = () => {
        setFilters((previous) => ({
            ...previous,
            page: 1,
        }));
    };

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

            {error && (
                <div className="alert alert-danger mt-3">
                    {error}
                </div>
            )}

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