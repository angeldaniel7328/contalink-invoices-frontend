import { API_BASE_URL, API_ENDPOINTS } from "../config/api.config";
import { getToken } from "../utils/authStorage";

/**
 * Obtiene las facturas de acuerdo con los filtros especificados.
 *
 * @param {Object} filters Parámetros de búsqueda.
 * @param {string} filters.start_date Fecha inicial (YYYY-MM-DD).
 * @param {string} filters.end_date Fecha final (YYYY-MM-DD).
 * @param {number} filters.page Número de página.
 * @param {number} filters.page_size Cantidad de registros por página.
 * @returns {Promise<Object>} Respuesta paginada de facturas.
 */
export async function getInvoices(filters) {
    const token = getToken();

    const queryParams = new URLSearchParams(filters).toString();

    const response = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS.INVOICES}?${queryParams}`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Error retrieving invoices.");
    }

    return data;
}