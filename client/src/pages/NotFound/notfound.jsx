import { useEffect } from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../../assets/images/favicon-32.png";

import "./notfound.scss";

function NotFound() {
    useEffect(() => {
        document.title =
            "Trouve ton artisan - Page non trouvée";

        const description =
            document.querySelector('meta[name="description"]');

        if (description) {
            description.setAttribute(
                "content",
                "La page que vous recherchez est introuvable."
            );
        }
    }, []);

    return (
        <main className="not-found">
            <section className="not-found_error">
                <div className="not-found_text">
                    <h1>Oups !</h1>

                    <p className="not-found_code">
                        Erreur 404
                    </p>

                    <p className="not-found_message">
                        Page non trouvée...
                    </p>
                </div>

                <img
                    className="not-found_image"
                    src={notFoundImage}
                    alt=""
                    aria-hidden="true"
                />
            </section>

            <Link
                className="not-found_link"
                to="/"
            >
                Retourner à la page d’accueil...
            </Link>
        </main>
    );
}

export default NotFound;