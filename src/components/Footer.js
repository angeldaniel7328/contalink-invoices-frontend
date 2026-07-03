/**
 * Pie de página de la aplicación.
 */
function Footer() {
    return (
        <footer className="bg-light border-top py-3 mt-auto">

            <div className="container text-center">

                {/* Información de copyright */}
                <small className="text-muted">
                    © {new Date().getFullYear()} Contalink Invoices.
                    Todos los derechos reservados.
                </small>

            </div>

        </footer>
    );
}

export default Footer;