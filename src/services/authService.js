import { API_BASE_URL, API_ENDPOINTS } from "../config/api.config";
import { saveToken } from "../utils/authStorage";

export async function login(username, password) {
    const credentials = btoa(`${username}:${password}`);

    const response = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS.LOGIN}`,
        {
            method: "POST",
            headers: {
                Authorization: `Basic ${credentials}`,
            },
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Authentication failed.");
    }

    saveToken(data.access_token);

    return data;
}