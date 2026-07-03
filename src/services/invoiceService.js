import { API_BASE_URL, API_ENDPOINTS } from "../config/api.config";
import { getToken } from "../utils/authStorage";

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