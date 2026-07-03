/**
 * URL base de la API.
 * Debe configurarse mediante la variable de entorno REACT_APP_API_URL.
 */
export const API_BASE_URL = process.env.REACT_APP_API_URL;

/**
 * Endpoints de la API.
 */
export const API_ENDPOINTS = {
    LOGIN: "/api/auth/login",
    INVOICES: "/api/invoices",
};