/**
 * Componente que muestra un indicador de carga mientras se procesa
 * una operación o se espera la respuesta de la API.
 */
function Loading() {
    return (
        <div className="d-flex justify-content-center align-items-center py-5">

            {/* Indicador visual de carga */}
            <div
                className="spinner-border text-primary"
                role="status"
                aria-hidden="true"
            ></div>

            {/* Mensaje mostrado al usuario */}
            <span className="ms-3">
                Cargando...
            </span>

        </div>
    );
}

export default Loading;