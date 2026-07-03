
function Loading() {
    return (
        <div className="d-flex justify-content-center align-items-center py-5">

            <div
                className="spinner-border text-primary"
                role="status"
                aria-hidden="true"
            ></div>

            <span className="ms-3">
                Cargando...
            </span>

        </div>
    );
}

export default Loading;