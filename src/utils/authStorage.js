const TOKEN_KEY = "token";

export function getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
}

export function saveToken(token) {
    sessionStorage.setItem(TOKEN_KEY, token);
}

export function removeToken() {
    sessionStorage.removeItem(TOKEN_KEY);
}

export function isAuthenticated() {
    return getToken() !== null;
}

export function logout() {
    removeToken();
}