const TOKEN_KEY = "token";

/**
 * Obtiene el token JWT almacenado en la sesión.
 *
 * @returns {string|null} Token JWT o null si no existe.
 */
export function getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
}

/**
 * Almacena el token JWT en la sesión.
 *
 * @param {string} token Token JWT.
 */
export function saveToken(token) {
    sessionStorage.setItem(TOKEN_KEY, token);
}

/**
 * Elimina el token JWT de la sesión.
 */
export function removeToken() {
    sessionStorage.removeItem(TOKEN_KEY);
}

/**
 * Verifica si existe un usuario autenticado.
 *
 * @returns {boolean} true si existe un token; false en caso contrario.
 */
export function isAuthenticated() {
    return getToken() !== null;
}

/**
 * Cierra la sesión del usuario.
 */
export function logout() {
    removeToken();
}